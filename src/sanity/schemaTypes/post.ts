import { defineArrayMember, defineField, defineType } from "sanity";
import { PILLARS } from "@/lib/constants";

/** An article in Insights & Articles, written and published by ASLPC staff in the Studio. */
export const post = defineType({
  name: "post",
  title: "Article",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "details", title: "Details" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "content",
      validation: (rule) => rule.required().max(120),
    }),
    defineField({
      name: "accentPhrase",
      title: "Highlighted words (optional)",
      description:
        "A few words copied exactly from the title, shown in gold. For example: Independent Dispute Tribunals.",
      type: "string",
      group: "content",
      validation: (rule) =>
        rule.custom((value, context) => {
          const title = (context.document?.title as string | undefined) ?? "";
          if (!value || title.includes(value)) return true;
          return "Must be copied exactly from the title (same spelling and capitals).";
        }),
    }),
    defineField({
      name: "slug",
      title: "Web address",
      description: 'The end of the article\'s link, e.g. aslpc.org/insights/your-title. Click "Generate".',
      type: "slug",
      group: "content",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "summary",
      title: "Summary",
      description: "One or two sentences shown on article cards and in Google results.",
      type: "text",
      rows: 3,
      group: "content",
      validation: (rule) => rule.required().max(300),
    }),
    defineField({
      name: "coverImage",
      title: "Cover image",
      description: "A landscape photo works best. Click the crop icon to choose the focal point.",
      type: "image",
      group: "content",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Image description",
          description: "Describe the photo for people who cannot see it, e.g. “A judge’s gavel on a desk”.",
          type: "string",
          validation: (rule) => rule.required(),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      title: "Article text",
      type: "array",
      group: "content",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Paragraph", value: "normal" },
            { title: "Heading", value: "h2" },
            { title: "Subheading", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet list", value: "bullet" },
            { title: "Numbered list", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
            ],
            annotations: [
              defineArrayMember({
                name: "link",
                title: "Link",
                type: "object",
                fields: [
                  defineField({
                    name: "href",
                    title: "Web address",
                    type: "url",
                    validation: (rule) => rule.required().uri({ scheme: ["http", "https", "mailto"] }),
                  }),
                ],
              }),
            ],
          },
        }),
        defineArrayMember({
          type: "image",
          title: "Image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", title: "Image description", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "caption", title: "Caption (optional)", type: "string" }),
          ],
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "author",
      title: "Author",
      description: "A person's name or a team, e.g. ASLPC Research Team.",
      type: "string",
      group: "details",
      initialValue: "ASLPC Research Team",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Publish date",
      type: "datetime",
      group: "details",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "pillar",
      title: "Area of work",
      type: "string",
      group: "details",
      options: { list: PILLARS.map((p) => ({ title: p.label, value: p.slug })), layout: "radio" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      description: "Short topic words used for filtering, e.g. governance. Press Enter after each one.",
      type: "array",
      group: "details",
      of: [defineArrayMember({ type: "string" })],
      options: { layout: "tags" },
    }),
  ],
  orderings: [
    { title: "Newest first", name: "publishedAtDesc", by: [{ field: "publishedAt", direction: "desc" }] },
  ],
  preview: {
    select: { title: "title", author: "author", date: "publishedAt", media: "coverImage" },
    prepare({ title, author, date, media }) {
      const day = date ? new Date(date).toLocaleDateString("en-GB", { dateStyle: "medium" }) : "No date";
      return { title, subtitle: `${day} · ${author ?? ""}`, media };
    },
  },
});
