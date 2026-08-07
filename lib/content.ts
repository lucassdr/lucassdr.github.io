import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type ProjectFrontmatter = {
  title: string;
  description: string;
  role?: string;
};

const projectsDirectory = path.join(process.cwd(), "content", "projects");

export function getProjectBySlug(slug: string) {
  const filePath = path.join(projectsDirectory, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  return {
    frontmatter: {
      title: String(data.title ?? ""),
      description: String(data.description ?? ""),
      role: data.role ? String(data.role) : undefined,
    },
    content,
  };
}
