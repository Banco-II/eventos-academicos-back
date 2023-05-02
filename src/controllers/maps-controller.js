const Location = require("../schemas/map-schema");

const getLocations = async (req, res) => {
  try {
    const eventsData = await Location.findAll();
    res.status(200).send(eventsData);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// exports.getLocationName = (req, res, next) => {
//   const locationName = req.params.locationName;
//   Location.findByName(locationName)
//     .then((location) => {
//       if (!location) {
//         return res.status(404).json({ message: "Localização não encontrada!" });
//       }
//       res.status(200).json({ location: location });
//     })
//     .catch((err) => console.log(err));
// };

const createLocation = async (req, res) => {
  const { name, description,longitude,latitude} = req.body;
  try {
  
    const createdEvent = Location.create({
      name: name,
      description: description,
      latitude,
      longitude
    });
    if (createdEvent) res.status(201).send("Event created");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const sincronize = async (req, res) => {
  await Location.sync();
  res.status(200).send("Sincronizado");
};

module.exports = { getLocations, sincronize, createLocation };
