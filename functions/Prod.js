const dotenv = require("dotenv");
dotenv.config();

var Airtable = require("airtable");
Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.REACT_APP_AIRTABLE_KEY,
});
var base = Airtable.base(process.env.REACT_APP_AIRTABLE_BASE);

base("products")
  .select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 200,
    view: "Grid view",
  })
  .eachPage(
    function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.
      // console.log(records);
      const products = records.map((product) => {
        const { id, fields } = product;
        const {
          name,
          featured,
          price,
          colors,
          company,
          description,
          category,
          shipping,
          images,
        } = fields;
        const { url } = images[0];
        // console.log(images);
        // console.log(fields);
        return {
          id,
          name,
          featured,
          price,
          colors,
          company,
          description,
          category,
          shipping,
          image: url,
        };
      });
      console.log(products);
      // records.forEach(function (record) {
      //   console.log("Retrieved", record.fields);
      // });

      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();
      return products;
    },
    function done(err) {
      if (err) {
        console.error(err);
        return;
      }
    }
  );
