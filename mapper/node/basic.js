
module.exports = function( node, record ){

  // osm id
  record.id = node.id;

  // set lat/lon
  record.center_point = {
    lat: node.lat,
    lon: node.lon
  };

  record.name = {};
  record.type = node.type;

  // copy all tags
  record.tags = node.tags;

};