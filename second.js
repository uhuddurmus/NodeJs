const generateRandomNumber = (limit) => {
  return Math.round(Math.random() * (limit - 1) + 1);
};

const articles = [];

const ensureUniqueID = (id) => {
  // base case
  if (!articles.some((article) => id === article.id)) {
      return id;
  }
  return ensureUniqueID(generateRandomNumber(1000));
};

const fetchArticles = () => {
  return Promise.resolve(articles);
};

const addArticle = async (heading, body) => {
  articles.push({
      id: ensureUniqueID(generateRandomNumber(1000)),
      title: heading,
      content: body,
      author_id: generateRandomNumber(1000),
  });
};

const displayArticles = async (articleList) => {
  articleList.forEach((article) => {
      console.log(article.title);
      console.log(article.content);
      console.log("---------------------------");
  });
};

const runProgram = async (heading, body) => {
  try {
      await addArticle(
          "Birinci",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate, elit ac lacinia sodales, orci lacus pretium elit, non laoreet augue velit non odio. Praesent et nulla nibh. Morbi blandit consequat libero, et semper sapien tempus non. Etiam at euismod ante. Nam sed elit sem. In efficitur bibendum lacinia. Integer eros dolor, fringilla vitae ultricies tincidunt, finibus eget ipsum. Phasellus sed condimentum neque. Ut orci mi, aliquam at molestie ut, euismod vitae augue. Etiam ipsum sem, porttitor at ante vel, eleifend lobortis nunc. Maecenas lorem dolor, faucibus non metus eget, aliquam facilisis massa. Integer viverra mi nec tellus sodales, sed auctor ex fermentum. Praesent dui odio, tempor eget enim eget, vehicula pellentesque lorem."
      );
      await addArticle(
          "İkinci",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate, elit ac lacinia sodales, orci lacus pretium elit, non laoreet augue velit non odio. Praesent et nulla nibh. Morbi blandit consequat libero, et semper sapien tempus non. Etiam at euismod ante. Nam sed elit sem. In efficitur bibendum lacinia. Integer eros dolor, fringilla vitae ultricies tincidunt, finibus eget ipsum. Phasellus sed condimentum neque. Ut orci mi, aliquam at molestie ut, euismod vitae augue. Etiam ipsum sem, porttitor at ante vel, eleifend lobortis nunc. Maecenas lorem dolor, faucibus non metus eget, aliquam facilisis massa. Integer viverra mi nec tellus sodales, sed auctor ex fermentum. Praesent dui odio, tempor eget enim eget, vehicula pellentesque lorem."
      );
      await addArticle(
          "Üçüncü",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate, elit ac lacinia sodales, orci lacus pretium elit, non laoreet augue velit non odio. Praesent et nulla nibh. Morbi blandit consequat libero, et semper sapien tempus non. Etiam at euismod ante. Nam sed elit sem. In efficitur bibendum lacinia. Integer eros dolor, fringilla vitae ultricies tincidunt, finibus eget ipsum. Phasellus sed condimentum neque. Ut orci mi, aliquam at molestie ut, euismod vitae augue. Etiam ipsum sem, porttitor at ante vel, eleifend lobortis nunc. Maecenas lorem dolor, faucibus non metus eget, aliquam facilisis massa. Integer viverra mi nec tellus sodales, sed auctor ex fermentum. Praesent dui odio, tempor eget enim eget, vehicula pellentesque lorem."
      );

      let articleList = await fetchArticles();

      await displayArticles(articleList);

      await addArticle(heading, body);

      articleList = await fetchArticles();

      await displayArticles(articleList);
  } catch (error) {
      console.error(error);
  }
};

const userInput = process.argv.slice(2, 4);
runProgram(String(userInput[0]), String(userInput[1]));
