/**
 * Get the base URL for assets, respecting the base path configuration
 * This ensures all public assets work correctly with GitHub Pages base path
 */
export function getBasePath(): string {
  return import.meta.env.BASE_URL;
}

/**
 * Prefix a path with the base URL
 * @param path - The path to prefix (should start with /)
 * @returns The prefixed path
 */
export function prefixPath(path: string): string {
  const base = getBasePath();
  // If path already starts with base, return as is
  if (path.startsWith(base)) {
    return path;
  }
  // Remove trailing slash from base if present, and ensure path starts with /
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${cleanBase}${cleanPath}`;
}

