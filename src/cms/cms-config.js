//test-repo
//git-gateway
export default {
    load_config_file: false,
    cms_manual_init: true,
    backend: {
        name: 'git-gateway',
        branch: 'main',
    },
    media_folder: 'public/img',
    public_folder: 'img',
    publish_mode: 'editorial_workflow',
    collections: [
        {
            name: 'pages',
            label: 'Pages',
            folder: 'cms/pages',
            extension: "mdx",
            format: "frontmatter",
            create: true,
            slug: "{{slug}}",
            identifier_field: 'slug',
            summary: "{{title}}",
            fields: [
                {
                    label: 'Slug',
                    name: 'slug',
                    widget: 'string',
                },
                {
                    label: 'Title',
                    name: 'title',
                    widget: 'string',
                },
                {
                    label: "Publish Date",
                    name: "date",
                    widget: "datetime",
                    format: "YYYY-MM-DD",
                    dateFormat: "YYYY-MM-DD",
                    timeFormat: false,
                },
                {
                    label: "Body",
                    name: "body",
                    widget: "markdown",
                },
            ],
        }
    ],
};