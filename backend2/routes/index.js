const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", controllers.getAllBooks);

router.post("/book", controllers.createBook);

router.delete("/books/:id", controllers.deleteBook);

router.put("/books/:id", controllers.updateBook);

router.get("/books/:id", controllers.getBookByName);

router.post("/chapter", controllers.createChapter);

router.get("/chapterget/:id", controllers.getAllChaptersByBook);

router.put("/chapter/:id", controllers.updateChapter);

router.delete("/chapter/:id", controllers.deleteChapter);

router.get("/chapter/:id/:chapNum", controllers.getChaptersByBook);

module.exports = router;
