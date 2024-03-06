import lume from "lume/mod.ts";
import multilanguage from "lume/plugins/multilanguage.ts";

const site = lume({
  src: "./src",
});

site.use(multilanguage({
  languages: ["en", "ru", "el"],
}));

export default site;
