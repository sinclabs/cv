migrate((db) => {
  const collection = new Collection({
    "id": "qk66njeok7ihqmp",
    "created": "2023-03-13 06:58:25.731Z",
    "updated": "2023-03-13 06:58:25.731Z",
    "name": "company",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "8tdclrrs",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "bzrseicg",
        "name": "intro",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("qk66njeok7ihqmp");

  return dao.deleteCollection(collection);
})
