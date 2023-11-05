

import React, { useEffect, useState } from 'react';

import { Map, Layer, Source } from "react-map-gl";
import DeckGL from "deck.gl";
import Button from '@mui/material/Button';

import { useDispatch, useSelector } from 'react-redux';
import { fetchPolygons } from '../../redux/actions/polygonsAction';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import styles from './mapPage.module.css'; // Import the CSS Modules file


interface Region {
  id: number;
  color: string;
  coordinates: number[][];
}

const MapPage: React.FC = () => {
  const [regions, setRegions ] = useState<Region[]>([  {
    id: 1,
    color: "red",
    coordinates: [[37.8833, -122.4167], [37.8833, -122.2833], [37.75, -122.2833], [37.75, -122.4167]],
  },
  {
    id: 2,
    color: "green",
    coordinates: [[37.75, -122.15], [37.75, -121.9833], [37.6167, -121.9833], [37.6167, -122.15]],
  },
  {
    id: 3,
    color: "blue",
    coordinates: [[37.6167, -121.8167], [37.6167, -121.65], [37.4833, -121.65], [37.4833, -121.8167]],
  }]);

  const geojson = {
    type: 'FeatureCollection',
    features: [
      {type: 'Feature', geometry: {type: 'Point', coordinates: [-122.4, 37.8]}}
    ]
  };

  const dispatch = useDispatch();
  const polygons = useSelector((state: any) => state.polygons.polygons);
  const loading = useSelector((state: any) => state.polygons.polygons.loading);
  const error = useSelector((state: any) => state.polygons.polygons.error);
  console.log(polygons);

  useEffect(() => {
    dispatch<any>(fetchPolygons());
  }, [dispatch]);

  return (
    // <Map
    // mapboxAccessToken="pk.eyJ1Ijoia2lyb2licmEiLCJhIjoiY2xvaG52dGZlMWNnNjJqcGx1dDI1MDZzayJ9.4vhSClPIiIA9zESDhBQH9Q"
    // initialViewState={{
    //   longitude: -122.4,
    //   latitude: 37.8,
    //   zoom: 14
    // }}
    // style={{width: 600, height: 400}}
    // mapStyle="mapbox://styles/mapbox/streets-v9"
    //  >
    //   <Source id="regions-source"  type="geojson" data={geojson} />
    //   {/* <Layer source="regions-source" layer={regionsLayer} /> */}
    // </Map>

    <div className={styles["map-container"]}>
      <Box sx={{ minWidth: 120 }} className={styles["form-control"]}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select Polygon</InputLabel>
          <Select labelId="demo-simple-select-label" id="demo-simple-select">
            {polygons.map((polygon: any) => (
              <MenuItem value={polygon.id}>{polygon.reg_name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Map
        mapboxAccessToken="pk.eyJ1Ijoia2lyb2licmEiLCJhIjoiY2xvaG52dGZlMWNnNjJqcGx1dDI1MDZzayJ9.4vhSClPIiIA9zESDhBQH9Q"
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14,
        }}
        style={{ width: '100%', height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
    </div>
  
  );
};

export default MapPage;

