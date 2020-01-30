const config = {
  siteTitle: "Shivaraman Aiyer", // Site title.
  siteTitleShort: "Shivaraman", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Shivaraman Aiyer", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://shivaramanaiyer.dev", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription:
    "Shivaraman Aiyer is a Full Stack developer specialized in Javascript and interested in Cybersecurity.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  googleAnalyticsID: "", // GA tracking ID.
  disqusShortname: "", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD HH:mm:ss", // Date format used in the frontmatter.
  dateFormat: "DD-MM-YYYY", // Date format for display.
  postsPerPage: 10, // Amount of posts displayed per listing page.
  userName: "Shivaraman", // Username to display in the author segment.
  userEmail: "hello@shivaramanaiyer.dev", // Email used for RSS feed's author segment
  userTwitter: "shivaramanaiyer", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Bangalore, India", // User location to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/shivaramanaiyer",
      imagePath: "/logos/github.png"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/shivaramanaiyer",
      imagePath: "/logos/twitter.png"
    },
    {
      label: "Email",
      url: "mailto:hello@shivaramanaiyer.dev",
      imagePath: "/logos/email.png"
    }
  ],
  menuItems: [
    {
      label: "About",
      to: "/self"
    },
    {
      label: "Blog",
      to: "/blog"
    }
  ],
  themeColor: "#3c91e6", // Used for setting manifest and progress theme colors.
  backgroundColor: "#fafffd" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
