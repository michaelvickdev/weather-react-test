import { DataGrid, GridColDef } from "@mui/x-data-grid";
import api from "../../redux/api";
import moment from "moment";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Box } from "@mui/material";

const columns: GridColDef[] = [
  { field: "time", headerName: "Time", width: 200 },
  {
    field: "temperature",
    headerName: "Temperature",
    width: 130,
    valueFormatter: (params) => `${params.value}°F`,
  },
  {
    field: "visibility",
    headerName: "Visibility ",
    width: 130,
    valueFormatter: (params) => `${params.value} mi`,
  },
  {
    field: "wind_speed",
    headerName: "Wind",
    width: 130,
    valueFormatter: (params) => `${params.value} mph`,
  },
  {
    field: "wind_gust",
    headerName: "Wind Gust",
    width: 130,
    valueFormatter: (params) => `${params.value} mph`,
  },
  { field: "rain_flag", headerName: "Rain", width: 120 },
  { field: "snow_flag", headerName: "Snow", width: 120 },
  { field: "sleet_flag", headerName: "Sleet", width: 120 },
];

export default function Data() {
  const latitude = useSelector((state: RootState) => state.forecast.latitude);
  const longitude = useSelector((state: RootState) => state.forecast.longitude);

  const { data, isFetching } = api.useGetForecastQuery(
    {
      latitude,
      longitude,
    },
    {
      skip: !Boolean(latitude && longitude),
    }
  );

  const hourly = data?.locations?.[0]?.hourly || [];

  const rows = hourly?.map((item: any) => ({
    ...item,
    id: item.time_iso,
    time: moment(item.time_iso).format("LLL"),
  }));

  return (
    <Box style={{ height: 400, width: "100%" }}>
      <DataGrid loading={isFetching} rows={rows} columns={columns} />
    </Box>
  );
}
