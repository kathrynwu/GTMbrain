const STORAGE_KEY = "gtmbrain-kol-crm-template-v1";
const PLATFORM_OPTIONS = ["Twitter", "YouTube"];
const STATUS_OPTIONS = [
  "Not Contacted",
  "Contacted",
  "Replied",
  "In Negotiation",
  "Partnered",
  "Closed",
];
const CSV_HEADERS = [
  "name",
  "handle",
  "platform",
  "followers",
  "niche",
  "owner",
  "status",
  "pricing",
  "last_contact",
];
const SEED_DATA = [
  {
    name: "Alex Reibman",
    handle: "@alexreibman",
    platform: "Twitter",
    followers: 53000,
    niche: "B2B creator",
    owner: "Siyu",
    status: "Contacted",
    pricing: 160,
    last_contact: "2026-03-14",
  },
  {
    name: "Tulsi Soni",
    handle: "@shedntcare_",
    platform: "Twitter",
    followers: 140300,
    niche: "Creator tools",
    owner: "Siyu",
    status: "Replied",
    pricing: 120,
    last_contact: "2026-03-20",
  },
  {
    name: "LinkedIn Flex",
    handle: "@linkedinflex",
    platform: "Twitter",
    followers: 60600,
    niche: "Career content",
    owner: "Siyu",
    status: "Not Contacted",
    pricing: "",
    last_contact: "",
  },
  {
    name: "Sarah Annabels",
    handle: "@SarahAnnabels",
    platform: "Twitter",
    followers: 222800,
    niche: "Marketing creator",
    owner: "Siyu",
    status: "In Negotiation",
    pricing: 180,
    last_contact: "2026-03-25",
  },
  {
    name: "Growth Lab",
    handle: "https://youtube.com/@growthlab",
    platform: "YouTube",
    followers: 74900,
    niche: "Startup education",
    owner: "Siyu",
    status: "Partnered",
    pricing: 450,
    last_contact: "2026-03-11",
  },
];

const state = {
  records: [],
  filters: {
    search: "",
    platform: "all",
    status: "all",
    owner: "all",
    pricing: "all",
    sort: "last_contact_desc",
  },
  selectedId: null,
  toastTimeout: null,
};

const elements = {};

document.addEventListener("DOMContentLoaded", init);

function init() {
  cacheElements();
  populateSelects();
  bindEvents();
  state.records = loadRecords();
  state.selectedId = state.records[0] ? state.records[0].id : null;
  render();
}

function cacheElements() {
  elements.statsGrid = document.querySelector("#stats-grid");
  elements.statusLane = document.querySelector("#status-lane");
  elements.recordsBody = document.querySelector("#records-body");
  elements.tableHeading = document.querySelector("#table-heading");
  elements.tableCopy = document.querySelector("#table-copy");
  elements.formTitle = document.querySelector("#form-title");
  elements.formCopy = document.querySelector("#form-copy");
  elements.toast = document.querySelector("#toast");
  elements.form = document.querySelector("#record-form");
  elements.csvInput = document.querySelector("#csv-input");

  elements.searchInput = document.querySelector("#search-input");
  elements.platformFilter = document.querySelector("#platform-filter");
  elements.statusFilter = document.querySelector("#status-filter");
  elements.ownerFilter = document.querySelector("#owner-filter");
  elements.pricingFilter = document.querySelector("#pricing-filter");
  elements.sortSelect = document.querySelector("#sort-select");

  elements.nameInput = document.querySelector("#name-input");
  elements.handleInput = document.querySelector("#handle-input");
  elements.platformInput = document.querySelector("#platform-input");
  elements.followersInput = document.querySelector("#followers-input");
  elements.nicheInput = document.querySelector("#niche-input");
  elements.ownerInput = document.querySelector("#owner-input");
  elements.statusInput = document.querySelector("#status-input");
  elements.pricingInput = document.querySelector("#pricing-input");
  elements.lastContactInput = document.querySelector("#last-contact-input");

  elements.newRecordButton = document.querySelector("#new-record-button");
  elements.importButton = document.querySelector("#import-button");
  elements.exportButton = document.querySelector("#export-button");
  elements.restoreButton = document.querySelector("#restore-button");
  elements.clearFiltersButton = document.querySelector("#clear-filters-button");
  elements.resetFormButton = document.querySelector("#reset-form-button");
  elements.deleteButton = document.querySelector("#delete-button");
  elements.duplicateButton = document.querySelector("#duplicate-button");
}

function populateSelects() {
  const platformOptions = [
    '<option value="all">All platforms</option>',
    ...PLATFORM_OPTIONS.map((platform) => {
      return `<option value="${platform}">${platform}</option>`;
    }),
  ].join("");
  const statusOptions = [
    '<option value="all">All statuses</option>',
    ...STATUS_OPTIONS.map((status) => {
      return `<option value="${status}">${status}</option>`;
    }),
  ].join("");

  elements.platformFilter.innerHTML = platformOptions;
  elements.platformInput.innerHTML = PLATFORM_OPTIONS.map((platform) => {
    return `<option value="${platform}">${platform}</option>`;
  }).join("");
  elements.statusFilter.innerHTML = statusOptions;
  elements.statusInput.innerHTML = STATUS_OPTIONS.map((status) => {
    return `<option value="${status}">${status}</option>`;
  }).join("");
}

function bindEvents() {
  elements.searchInput.addEventListener("input", (event) => {
    state.filters.search = event.target.value.trim();
    render();
  });

  elements.platformFilter.addEventListener("change", (event) => {
    state.filters.platform = event.target.value;
    render();
  });

  elements.statusFilter.addEventListener("change", (event) => {
    state.filters.status = event.target.value;
    render();
  });

  elements.ownerFilter.addEventListener("change", (event) => {
    state.filters.owner = event.target.value;
    render();
  });

  elements.pricingFilter.addEventListener("change", (event) => {
    state.filters.pricing = event.target.value;
    render();
  });

  elements.sortSelect.addEventListener("change", (event) => {
    state.filters.sort = event.target.value;
    render();
  });

  elements.form.addEventListener("submit", handleFormSubmit);

  elements.newRecordButton.addEventListener("click", () => {
    state.selectedId = null;
    renderForm();
    renderTable();
    elements.nameInput.focus();
  });

  elements.importButton.addEventListener("click", () => {
    elements.csvInput.click();
  });

  elements.csvInput.addEventListener("change", handleImport);

  elements.exportButton.addEventListener("click", handleExport);

  elements.restoreButton.addEventListener("click", () => {
    const shouldRestore = window.confirm(
      "Replace your local changes with the sample data?",
    );
    if (!shouldRestore) {
      return;
    }
    state.records = createSeedRecords();
    persistRecords();
    state.selectedId = state.records[0] ? state.records[0].id : null;
    render();
    showToast("Sample data restored.");
  });

  elements.clearFiltersButton.addEventListener("click", () => {
    state.filters = {
      search: "",
      platform: "all",
      status: "all",
      owner: "all",
      pricing: "all",
      sort: "last_contact_desc",
    };
    render();
  });

  elements.resetFormButton.addEventListener("click", () => {
    state.selectedId = null;
    renderForm();
    renderTable();
  });

  elements.deleteButton.addEventListener("click", handleDelete);
  elements.duplicateButton.addEventListener("click", handleDuplicate);
}

function loadRecords() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return createSeedRecords();
    }

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      return createSeedRecords();
    }

    return parsed.map((record, index) => normalizeRecord(record, index));
  } catch (error) {
    console.error("Failed to load CRM data", error);
    showToast("Could not load saved data. Falling back to sample records.");
    return createSeedRecords();
  }
}

function createSeedRecords() {
  return SEED_DATA.map((record, index) => {
    return normalizeRecord(
      {
        ...record,
        id: `seed-${index + 1}`,
      },
      index,
    );
  });
}

function normalizeRecord(record, index) {
  const normalizedPlatform = PLATFORM_OPTIONS.includes(record.platform)
    ? record.platform
    : PLATFORM_OPTIONS[0];
  const normalizedStatus = STATUS_OPTIONS.includes(record.status)
    ? record.status
    : STATUS_OPTIONS[0];

  return {
    id: record.id || generateId(index),
    name: String(record.name || "").trim(),
    handle: String(record.handle || "").trim(),
    platform: normalizedPlatform,
    followers: normalizeFollowers(record.followers),
    niche: String(record.niche || "").trim(),
    owner: String(record.owner || "").trim(),
    status: normalizedStatus,
    pricing: normalizePricing(record.pricing),
    last_contact: normalizeDate(record.last_contact),
  };
}

function normalizeFollowers(value) {
  if (value === "" || value === null || value === undefined) {
    return 0;
  }

  const parsed = Number.parseInt(String(value).replace(/[^\d]/g, ""), 10);
  return Number.isNaN(parsed) ? 0 : parsed;
}

function normalizePricing(value) {
  if (value === null || value === undefined) {
    return "";
  }

  const text = String(value).trim();
  if (!text) {
    return "";
  }

  if (/^\d+(\.\d+)?$/.test(text)) {
    return Number(text);
  }

  return text;
}

function normalizeDate(value) {
  if (!value) {
    return "";
  }

  const text = String(value).trim();
  if (!text) {
    return "";
  }

  return /^\d{4}-\d{2}-\d{2}$/.test(text) ? text : "";
}

function generateId(index = 0) {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return window.crypto.randomUUID();
  }

  return `record-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 8)}`;
}

function render() {
  renderOwnerFilter();
  renderStats();
  renderStatusLane();
  renderTable();
  renderForm();
  syncControls();
}

function renderOwnerFilter() {
  const owners = Array.from(
    new Set(
      state.records
        .map((record) => record.owner)
        .filter(Boolean)
        .sort((left, right) => left.localeCompare(right)),
    ),
  );

  const options = ['<option value="all">All owners</option>']
    .concat(
      owners.map((owner) => {
        return `<option value="${escapeAttribute(owner)}">${escapeHTML(owner)}</option>`;
      }),
    )
    .join("");

  elements.ownerFilter.innerHTML = options;
}

function renderStats() {
  const stats = [
    {
      label: "Total influencers",
      value: state.records.length,
      note: "All records in your local CRM",
    },
    {
      label: "Needs outreach",
      value: countByStatus("Not Contacted"),
      note: "Ready for first touch",
    },
    {
      label: "Live conversations",
      value: state.records.filter((record) => {
        return record.status === "Replied" || record.status === "In Negotiation";
      }).length,
      note: "Replied or negotiating",
    },
    {
      label: "Partnered",
      value: countByStatus("Partnered"),
      note: "Already landed",
    },
  ];

  elements.statsGrid.innerHTML = stats
    .map((stat) => {
      return `
        <article class="stat-card">
          <span>${escapeHTML(stat.label)}</span>
          <strong>${stat.value}</strong>
          <span>${escapeHTML(stat.note)}</span>
        </article>
      `;
    })
    .join("");
}

function renderStatusLane() {
  elements.statusLane.innerHTML = STATUS_OPTIONS.map((status) => {
    const count = countByStatus(status);
    const isActive = state.filters.status === status;
    return `
      <button
        class="status-chip ${isActive ? "is-active" : ""}"
        type="button"
        data-status-chip="${escapeAttribute(status)}"
      >
        <span class="status-chip-meta">Filter</span>
        <strong>${count}</strong>
        <span class="status-chip-label">${escapeHTML(status)}</span>
      </button>
    `;
  }).join("");

  elements.statusLane.querySelectorAll("[data-status-chip]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextStatus = button.getAttribute("data-status-chip");
      state.filters.status = state.filters.status === nextStatus ? "all" : nextStatus;
      render();
    });
  });
}

function renderTable() {
  const filtered = getFilteredRecords();
  elements.tableHeading.textContent = `${filtered.length} Influencer${filtered.length === 1 ? "" : "s"}`;
  elements.tableCopy.textContent =
    filtered.length === state.records.length
      ? "Showing the full CRM."
      : `Filtered from ${state.records.length} total records.`;

  if (filtered.length === 0) {
    elements.recordsBody.innerHTML = `
      <tr>
        <td class="empty-state" colspan="9">
          No influencers match the current filters.
        </td>
      </tr>
    `;
    return;
  }

  elements.recordsBody.innerHTML = filtered
    .map((record) => {
      const isSelected = record.id === state.selectedId;
      return `
        <tr class="${isSelected ? "is-selected" : ""}" data-row-id="${escapeAttribute(record.id)}">
          <td>
            <div class="record-name">
              <strong>${escapeHTML(record.name)}</strong>
              <span class="record-subtitle">${escapeHTML(record.handle || "No handle yet")}</span>
            </div>
          </td>
          <td><span class="platform-pill">${escapeHTML(record.platform)}</span></td>
          <td>${escapeHTML(record.niche || "Unassigned")}</td>
          <td>${formatFollowers(record.followers)}</td>
          <td>${escapeHTML(record.owner || "Unowned")}</td>
          <td>${renderStatusPill(record.status)}</td>
          <td>${escapeHTML(formatPricing(record.pricing))}</td>
          <td>${escapeHTML(formatDate(record.last_contact))}</td>
          <td>
            <div class="row-actions">
              <button class="row-action-button" type="button" data-edit-id="${escapeAttribute(record.id)}">
                Edit
              </button>
            </div>
          </td>
        </tr>
      `;
    })
    .join("");

  elements.recordsBody.querySelectorAll("[data-row-id]").forEach((row) => {
    row.addEventListener("click", (event) => {
      const editButton = event.target.closest("[data-edit-id]");
      const nextId = editButton
        ? editButton.getAttribute("data-edit-id")
        : row.getAttribute("data-row-id");
      state.selectedId = nextId;
      renderForm();
      renderTable();
    });
  });
}

function renderForm() {
  const selected = getSelectedRecord();
  const record = selected || createEmptyRecord();

  elements.formTitle.textContent = selected ? record.name : "New Influencer";
  elements.formCopy.textContent = selected
    ? `Editing ${record.status} for ${record.owner || "Unassigned owner"}.`
    : "Fill in the workflow fields and save.";
  elements.deleteButton.hidden = !selected;
  elements.duplicateButton.hidden = !selected;

  elements.nameInput.value = record.name;
  elements.handleInput.value = record.handle;
  elements.platformInput.value = record.platform;
  elements.followersInput.value = record.followers || "";
  elements.nicheInput.value = record.niche;
  elements.ownerInput.value = record.owner;
  elements.statusInput.value = record.status;
  elements.pricingInput.value =
    record.pricing === "" || record.pricing === null ? "" : String(record.pricing);
  elements.lastContactInput.value = record.last_contact;
}

function createEmptyRecord() {
  const defaultOwner = Array.from(
    new Set(state.records.map((record) => record.owner).filter(Boolean)),
  )[0] || "";

  return {
    name: "",
    handle: "",
    platform: PLATFORM_OPTIONS[0],
    followers: "",
    niche: "",
    owner: defaultOwner,
    status: STATUS_OPTIONS[0],
    pricing: "",
    last_contact: "",
  };
}

function syncControls() {
  elements.searchInput.value = state.filters.search;
  elements.platformFilter.value = state.filters.platform;
  elements.statusFilter.value = state.filters.status;
  elements.ownerFilter.value = state.filters.owner;
  elements.pricingFilter.value = state.filters.pricing;
  elements.sortSelect.value = state.filters.sort;
}

function getFilteredRecords() {
  return [...state.records]
    .filter((record) => {
      if (state.filters.platform !== "all" && record.platform !== state.filters.platform) {
        return false;
      }
      if (state.filters.status !== "all" && record.status !== state.filters.status) {
        return false;
      }
      if (state.filters.owner !== "all" && record.owner !== state.filters.owner) {
        return false;
      }
      if (state.filters.pricing === "known" && !hasPricing(record)) {
        return false;
      }
      if (state.filters.pricing === "missing" && hasPricing(record)) {
        return false;
      }
      if (state.filters.search) {
        const haystack = [
          record.name,
          record.handle,
          record.niche,
          record.owner,
          record.platform,
          record.status,
        ]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(state.filters.search.toLowerCase())) {
          return false;
        }
      }

      return true;
    })
    .sort(sortRecords);
}

function sortRecords(left, right) {
  switch (state.filters.sort) {
    case "status_flow":
      return compareValues(
        STATUS_OPTIONS.indexOf(left.status),
        STATUS_OPTIONS.indexOf(right.status),
      ) || compareValues(left.name, right.name);
    case "followers_desc":
      return compareValues(right.followers, left.followers) || compareValues(left.name, right.name);
    case "followers_asc":
      return compareValues(left.followers, right.followers) || compareValues(left.name, right.name);
    case "pricing_desc":
      return compareValues(getPricingNumber(right.pricing), getPricingNumber(left.pricing)) ||
        compareValues(left.name, right.name);
    case "pricing_asc":
      return compareValues(getPricingNumber(left.pricing), getPricingNumber(right.pricing)) ||
        compareValues(left.name, right.name);
    case "name_asc":
      return compareValues(left.name, right.name);
    case "last_contact_desc":
    default:
      return compareValues(
        getSortableDate(right.last_contact),
        getSortableDate(left.last_contact),
      ) || compareValues(left.name, right.name);
  }
}

function compareValues(left, right) {
  if (typeof left === "string" || typeof right === "string") {
    return String(left).localeCompare(String(right));
  }
  return left - right;
}

function getSortableDate(value) {
  return value ? Number(value.replace(/-/g, "")) : 0;
}

function getPricingNumber(value) {
  if (typeof value === "number") {
    return value;
  }

  if (!value) {
    return -1;
  }

  const digits = String(value).replace(/[^\d.]/g, "");
  if (!digits) {
    return -1;
  }

  const parsed = Number(digits);
  return Number.isNaN(parsed) ? -1 : parsed;
}

function countByStatus(status) {
  return state.records.filter((record) => record.status === status).length;
}

function hasPricing(record) {
  return record.pricing !== "" && record.pricing !== null && record.pricing !== undefined;
}

function getSelectedRecord() {
  return state.records.find((record) => record.id === state.selectedId) || null;
}

function handleFormSubmit(event) {
  event.preventDefault();

  const current = getSelectedRecord();
  const nextRecord = normalizeRecord(
    {
      id: current ? current.id : generateId(state.records.length),
      name: elements.nameInput.value,
      handle: elements.handleInput.value,
      platform: elements.platformInput.value,
      followers: elements.followersInput.value,
      niche: elements.nicheInput.value,
      owner: elements.ownerInput.value,
      status: elements.statusInput.value,
      pricing: elements.pricingInput.value,
      last_contact: elements.lastContactInput.value,
    },
    state.records.length,
  );

  if (!nextRecord.name || !nextRecord.owner) {
    showToast("Name and owner are required.");
    return;
  }

  if (current) {
    state.records = state.records.map((record) => {
      return record.id === nextRecord.id ? nextRecord : record;
    });
  } else {
    state.records = [nextRecord].concat(state.records);
  }

  state.selectedId = nextRecord.id;
  persistRecords();
  render();
  showToast(current ? "Record updated." : "Record created.");
}

function handleDelete() {
  const current = getSelectedRecord();
  if (!current) {
    return;
  }

  const shouldDelete = window.confirm(`Delete ${current.name}?`);
  if (!shouldDelete) {
    return;
  }

  state.records = state.records.filter((record) => record.id !== current.id);
  persistRecords();
  state.selectedId = state.records[0] ? state.records[0].id : null;
  render();
  showToast("Record deleted.");
}

function handleDuplicate() {
  const current = getSelectedRecord();
  if (!current) {
    return;
  }

  const duplicate = normalizeRecord(
    {
      ...current,
      id: generateId(state.records.length + 1),
      name: `${current.name} Copy`,
    },
    state.records.length + 1,
  );

  state.records = [duplicate].concat(state.records);
  state.selectedId = duplicate.id;
  persistRecords();
  render();
  showToast("Record duplicated.");
}

function handleImport(event) {
  const [file] = event.target.files || [];
  if (!file) {
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsedRows = parseCSV(String(reader.result || ""));
      if (parsedRows.length === 0) {
        showToast("No valid CSV rows found.");
        return;
      }

      const summary = upsertImportedRows(parsedRows);
      persistRecords();
      render();
      showToast(`Imported ${summary.added} new and updated ${summary.updated} existing records.`);
    } catch (error) {
      console.error("Failed to import CSV", error);
      showToast("Could not parse that CSV file.");
    } finally {
      event.target.value = "";
    }
  };
  reader.readAsText(file);
}

function parseCSV(text) {
  const lines = text
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .split("\n")
    .filter((line) => line.trim().length > 0);

  if (lines.length < 2) {
    return [];
  }

  const headers = splitCSVLine(lines[0]).map(normalizeHeader);
  const rows = [];

  for (let index = 1; index < lines.length; index += 1) {
    const cells = splitCSVLine(lines[index]);
    const row = {};
    headers.forEach((header, cellIndex) => {
      row[header] = cells[cellIndex] || "";
    });
    if (!row.name) {
      continue;
    }
    rows.push(row);
  }

  return rows.map((row, index) => normalizeRecord(row, index));
}

function splitCSVLine(line) {
  const cells = [];
  let current = "";
  let inQuotes = false;

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    const nextChar = line[index + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        current += '"';
        index += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === "," && !inQuotes) {
      cells.push(current.trim());
      current = "";
      continue;
    }

    current += char;
  }

  cells.push(current.trim());
  return cells;
}

function normalizeHeader(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_");
}

function upsertImportedRows(rows) {
  const existingByKey = new Map();
  state.records.forEach((record) => {
    existingByKey.set(getRecordKey(record), record);
  });

  let added = 0;
  let updated = 0;

  rows.forEach((row) => {
    const key = getRecordKey(row);
    const existing = existingByKey.get(key);
    if (existing) {
      const merged = normalizeRecord(
        {
          ...existing,
          ...row,
          id: existing.id,
        },
        0,
      );
      state.records = state.records.map((record) => {
        return record.id === existing.id ? merged : record;
      });
      updated += 1;
      return;
    }

    const fresh = normalizeRecord(
      {
        ...row,
        id: generateId(state.records.length + added + 1),
      },
      state.records.length + added,
    );
    state.records = [fresh].concat(state.records);
    added += 1;
  });

  state.selectedId = state.records[0] ? state.records[0].id : null;
  return { added, updated };
}

function getRecordKey(record) {
  const rawKey = [record.platform, record.handle || record.name]
    .join("::")
    .trim()
    .toLowerCase();
  return rawKey;
}

function handleExport() {
  const csv = exportCSV(state.records);
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "kol-crm-export.csv";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
  showToast("CSV exported.");
}

function exportCSV(records) {
  const rows = [CSV_HEADERS.join(",")];
  records.forEach((record) => {
    const values = CSV_HEADERS.map((header) => {
      const value = record[header] ?? "";
      return escapeCSVValue(value);
    });
    rows.push(values.join(","));
  });
  return rows.join("\n");
}

function escapeCSVValue(value) {
  const text = String(value);
  if (text.includes(",") || text.includes('"') || text.includes("\n")) {
    return `"${text.replace(/"/g, '""')}"`;
  }
  return text;
}

function persistRecords() {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.records));
  } catch (error) {
    console.error("Failed to save CRM data", error);
    showToast("Could not save to localStorage.");
  }
}

function formatFollowers(value) {
  return Number(value || 0).toLocaleString();
}

function formatPricing(value) {
  if (typeof value === "number") {
    return `$${value.toLocaleString()}`;
  }
  return value || "Unknown";
}

function formatDate(value) {
  if (!value) {
    return "No contact yet";
  }

  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function renderStatusPill(status) {
  const className = `status-pill ${statusClassName(status)}`;
  return `<span class="${className}">${escapeHTML(status)}</span>`;
}

function statusClassName(status) {
  return `status-${status.toLowerCase().replace(/\s+/g, "-")}`;
}

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttribute(value) {
  return escapeHTML(value).replace(/`/g, "&#96;");
}

function showToast(message) {
  if (!elements.toast) {
    return;
  }

  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");

  if (state.toastTimeout) {
    window.clearTimeout(state.toastTimeout);
  }

  state.toastTimeout = window.setTimeout(() => {
    elements.toast.classList.remove("is-visible");
  }, 2400);
}
