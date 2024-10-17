export const formatSectionName = (title, i = null) => {
  return `${title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")}${i !== null ? `-${i + 1}` : ""}`;
};
