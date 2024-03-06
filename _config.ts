import lume from "lume/mod.ts";
import redirects from "lume/plugins/redirects.ts";
import multilanguage from "lume/plugins/multilanguage.ts";

const site = lume({
  src: "./src",
});

site.use(redirects());
site.use(multilanguage({
  languages: ["en", "ru", "el"],
}));

export default site;
