const OPENMART_API_BASE_URL = "https://api.openmart.ai";
const DEFAULT_ROUTING_STATUS = "To Review";

function buildSearchBusinessesPayload({
  label,
  query,
  location = [],
  hasWebsite = false,
  hasValidWebsite = false,
  hasContactInfo = false,
  limit = 25,
}) {
  if (!query) {
    throw new Error("query is required");
  }

  return {
    label,
    query,
    location: Array.isArray(location) ? location : [],
    has_website: hasWebsite,
    has_valid_website: hasValidWebsite,
    has_contact_info: hasContactInfo,
    limit,
  };
}

async function searchBusinesses({
  apiKey,
  payload,
  fetchImpl = globalThis.fetch,
}) {
  const rows = await requestJSON({
    apiKey,
    fetchImpl,
    method: "POST",
    path: "/api/v1/search",
    body: payload,
  });

  return Array.isArray(rows)
    ? rows.map((row) => normalizeProspect(row, payload))
    : [];
}

function buildFindDecisionMakerTasks(tasks) {
  if (!Array.isArray(tasks) || tasks.length === 0) {
    throw new Error("tasks are required");
  }

  return tasks.map((task) => {
    if (!task.domain) {
      throw new Error("task.domain is required");
    }
    if (!task.title) {
      throw new Error("task.title is required");
    }

    return {
      domain: normalizeDomain(task.domain),
      company_name: task.company_name || "",
      title: task.title,
      country: task.country || "",
      tracking_id: task.tracking_id || "",
    };
  });
}

async function submitFindDecisionMakerBatch({
  apiKey,
  tasks,
  fetchImpl = globalThis.fetch,
}) {
  return requestJSON({
    apiKey,
    fetchImpl,
    method: "POST",
    path: "/api/v1/task/batch/find_people",
    body: tasks,
  });
}

async function checkBatchStatus({
  apiKey,
  batchId,
  fetchImpl = globalThis.fetch,
}) {
  if (!batchId) {
    throw new Error("batchId is required");
  }

  return requestJSON({
    apiKey,
    fetchImpl,
    method: "GET",
    path: `/api/v1/task/batch/${encodeURIComponent(batchId)}/status`,
  });
}

async function getTaskIdsInBatch({
  apiKey,
  batchId,
  status = "COMPLETED",
  fetchImpl = globalThis.fetch,
}) {
  if (!batchId) {
    throw new Error("batchId is required");
  }

  const search = new URLSearchParams();
  if (status) {
    search.set("status", status);
  }

  return requestJSON({
    apiKey,
    fetchImpl,
    method: "GET",
    path: `/api/v1/task/batch/${encodeURIComponent(batchId)}/task_ids?${search.toString()}`,
  });
}

async function getTaskResult({
  apiKey,
  taskId,
  fetchImpl = globalThis.fetch,
}) {
  if (!taskId) {
    throw new Error("taskId is required");
  }

  return requestJSON({
    apiKey,
    fetchImpl,
    method: "GET",
    path: `/api/v1/task/${encodeURIComponent(taskId)}`,
  });
}

async function requestJSON({
  apiKey,
  fetchImpl = globalThis.fetch,
  method,
  path,
  body,
}) {
  if (!apiKey) {
    throw new Error("apiKey is required");
  }

  if (typeof fetchImpl !== "function") {
    throw new Error("fetch implementation is required");
  }

  const response = await fetchImpl(`${OPENMART_API_BASE_URL}${path}`, {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-API-Key": apiKey,
    },
    body: body === undefined ? undefined : JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`Openmart request failed with ${response.status}`);
  }

  return response.json();
}

function normalizeProspect(row, payload) {
  const sourceQuery = payload && payload.label
    ? payload.label
    : payload && payload.query
      ? payload.query
      : "";

  return {
    company_name: stringOrEmpty(row.company_name || row.name),
    website: stringOrEmpty(row.website),
    city: stringOrEmpty(row.city || firstLocationValue(payload, "city")),
    state: stringOrEmpty(row.state || firstLocationValue(payload, "state")),
    category: stringOrEmpty(row.category || row.primary_category),
    subcategory: stringOrEmpty(row.subcategory),
    employee_band: stringOrEmpty(row.employee_band),
    owner_name: stringOrEmpty(row.owner_name),
    phone: stringOrEmpty(row.phone),
    source_query: stringOrEmpty(sourceQuery),
    fit_score: 0,
    routing_status: DEFAULT_ROUTING_STATUS,
    routing_notes: "",
    openmart_id: stringOrEmpty(row.openmart_id || row.id),
  };
}

function firstLocationValue(payload, key) {
  if (!payload || !Array.isArray(payload.location) || payload.location.length === 0) {
    return "";
  }

  return stringOrEmpty(payload.location[0][key]);
}

function stringOrEmpty(value) {
  return value ? String(value).trim() : "";
}

function normalizeDomain(value) {
  const raw = stringOrEmpty(value)
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/.*$/, "");

  if (!raw) {
    return "";
  }

  return raw.startsWith("@") ? raw : `@${raw}`;
}

module.exports = {
  OPENMART_API_BASE_URL,
  buildSearchBusinessesPayload,
  searchBusinesses,
  buildFindDecisionMakerTasks,
  submitFindDecisionMakerBatch,
  checkBatchStatus,
  getTaskIdsInBatch,
  getTaskResult,
  normalizeProspect,
};
