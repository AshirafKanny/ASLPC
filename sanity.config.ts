"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { dataset, projectId } from "@/sanity/env";
import { post } from "@/sanity/schemaTypes/post";

export default defineConfig({
  name: "aslpc",
  title: "ASLPC Website",
  basePath: "/studio",
  projectId,
  dataset,
  schema: { types: [post] },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([S.documentTypeListItem("post").title("Articles")]),
    }),
  ],
  document: {
    // Staff only ever create articles; hide the generic "new document" options for anything else.
    newDocumentOptions: (prev) => prev.filter((item) => item.templateId === "post"),
  },
});
