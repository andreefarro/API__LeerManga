import express from "express";
import {MainController as Main}  from "../../controllers/MainController";

const router = express.Router();

const main = new Main()


/**
 * @openapi
 * /api/v1/recommend:
 *   get:
 *     tags:
 *        - Manga
 *     description: 
 *        Look for the list of manga or manhwas that LeerManga recommends and can be obtained in a card-like design
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Card'
 *       404:
 *         description: Failed not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Failed'
 *               
 */
router.get("/recommend", main.getMangaRecommend);

/**
 * @openapi
 * /api/v1/latest:
 *   get:
 *     tags:
 *        - Manga
 *     description:
 *        Search for the list of latest manga or manhwas at LeerManga and can be obtained in a poster-like design
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Card'
 *      
 *       404:
 *         description: Failed not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Failed'
 */
router.get("/latest", main.getMangaLatest);

/**
  * @openapi
  * /api/v1/library:
  *   get:
  *     tags:
  *        - Manga
  *     description: Look for the list of manga and manhwas in the LeerManga library
  *     parameters:
  *       - in: query
  *         name: page
  *         description: pass an optional page number to get the following lists
  *         example: 1
  *         required: false
  *     responses:
  *       200:
  *         description: Successful operation
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Poster'
  *       404:
  *         description: Failed not found
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Failed'
  */
router.get("/library", main.getLibraryByPage);

/**
 * @openapi
 * /api/v1/search/{name}:
 *   get:
 *     tags:
 *        - Manga
 *     description: Search for a list of manga and manhwas in the LeerManga library filtered by name to get lists in poster-like outlines
 *     parameters:
 *       - in: path
 *         name: name
 *         description: pass a required search string to search for manga
 *         example: the sword of dawn
 *         required: true
 *       - in: query
 *         name: page
 *         description: pass an optional number to go to the following search lists
 *         example: 1
 *         required: false
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Poster'
 *       404:
 *         description: Failed not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Failed'
 */
router.get("/search/:name", main.getMangaByName);

/** 
  * @openapi
  * /api/v1/manga/{id}:
  *   get:
  *     tags:
  *        - Manga
  *     description: get the description of a manga, chapters, categories
  *     parameters:
  *       - in: path
  *         name: id
  *         description: pass a required search string to search the manga
  *         example: the-sword-of-dawn
  *         required: true
  *     responses:
  *       200:
  *         description: Successful operation
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Manga'
  *       404:
  *         description: Failed not found
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Failed'
  */
router.get("/manga/:id", main.getMangaById);

/**
 * @openapi
 * /api/v1/gender/{name}:
 *   get:
 *     tags:
 *        - Manga
 *     description: get a list of manga and manhwas in the library LeerManga filter by genre
 *     parameters:
 *        - in: path
 *          name: name
 *          description: pass a string of a genre to search for a list of manga
 *          example: Aventura
 *          required: true
 *        - in: query
 *          name: page
 *          description: pass an optional number to go to the following search lists
 *          example: 1
 *          required: false
 *     responses:
  *       200:
  *         description: Successful operation
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Poster'
  *       404:
  *         description: Failed not found
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Failed'
 */
router.get("/gender/:name", main.getGenderByType);



/**
 * @openapi
 * /api/v1/lastEpisodes:
 *   get:
 *     tags:
 *        - Episodes
 *     description: get latest added episodes
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LastEpisodes'
 *       404:
 *         description: Failed not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Failed'
 */
router.get("/lastEpisodes", main.getMangaLastEpisodes);

/**
 * @openapi
 * /api/v1/episode/{id}:
 *   get:
 *     tags:
 *        - Episodes
 *     description: get the images of an episode
 *     parameters:
 *       - in: path
 *         name: id
 *         description: pass a required search string that references a manga
 *         example: maldita-reencarnacion-37.00
 *         required: true
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Episode'
 *       404:
 *         description: Failed
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Failed'
 */
router.get("/episode/:id", main.getEpisodeById);



/**
 * @openapi
 * /api/v1/genders:
 *   get:
 *     tags:
 *        - Genders
 *     description: get list of supported genres
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Genders'
 *       404:
 *         description: Failed not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Failed'
 */
router.get("/genders", main.getGenderList);





export { router };