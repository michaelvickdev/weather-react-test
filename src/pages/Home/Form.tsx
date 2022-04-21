import { TextField, Box, Button } from "@mui/material";
import { useFormik } from "formik";
import { useDispatch } from 'react-redux'
import { setLatitude, setLongitude } from "../../redux/slices/forecast";

function Form() {
const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      latitude: '',
      longitude: '',
    },
    onSubmit: (values) => {
      dispatch(setLatitude(Number(values.latitude)))
      dispatch(setLongitude(Number(values.longitude)))
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box mb={2}>
        <TextField
          fullWidth
          id="latitude"
          name="latitude"
          label="Latitude"
          value={formik.values.latitude}
          onChange={formik.handleChange}
          error={formik.touched.latitude && Boolean(formik.errors.latitude)}
          helperText={formik.touched.latitude && formik.errors.latitude}
          required
          type="number"
          size="small"
        />
      </Box>
      <Box mb={2}>
        <TextField
          fullWidth
          id="longitude"
          name="longitude"
          label="Longitude"
          value={formik.values.longitude}
          onChange={formik.handleChange}
          error={formik.touched.longitude && Boolean(formik.errors.longitude)}
          helperText={formik.touched.longitude && formik.errors.longitude}
          required
          type="number"
          size="small"
        />
      </Box>
      <Button
        color="primary"
        variant="contained"
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
}

export default Form;
