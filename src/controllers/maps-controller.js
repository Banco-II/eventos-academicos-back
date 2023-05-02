const Location = require("../schemas/map-schema");

exports.getLocation = (req, res, next) => {
  Location.findAll()
    .then((locations) => {
      res.status(200).json({ locations: locations });
    })
    .catch((err) => console.log(err));
};

exports.getLocationName = (req, res, next) => {
  const locationName = req.params.locationName;
  Location.findByName(locationName)
    .then((location) => {
      if (!location) {
        return res.status(404).json({ message: "Localização não encontrada!" });
      }
      res.status(200).json({ location: location });
    })
    .catch((err) => console.log(err));
};

exports.createLocation = (req, res, next) => {
  const name = req.body.name;
  const description = req.body.description;
  Location.create({
    name: name,
    description: description,
  })
    .then((result) => {
      console.log("Localização criada");
      res.status(201).json({
        message: "Localização criada com sucesso",
        location: result,
      });
    })
    .catch((err) => console.log(err));
};
