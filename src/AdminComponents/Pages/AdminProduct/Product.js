import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  FormControl,
  InputLabel,
  Card,
  CardContent,
  CardActionArea,
  CardActions,
  CardMedia,
  Select,
  MenuItem,
  OutlinedInput,
  useTheme,
  Container,
  CssBaseline,
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  ThemeProvider,
} from "@material-ui/core";
import { Create, HighlightOff } from "@material-ui/icons";

import { getCategories } from "../../../Redux/Thunks/AdminHome";
import { getFormData } from "../utils";
import {
  addProduct,
  deleteProductThunk,
  getProduct,
  getProductbyCategory,
} from "../../../Redux/Thunks/AdminProduct";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 32;
const MenuProps = {
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "left",
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "left",
  },
  getContentAnchorEl: null,
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const initialProductData = {
  application: "",
  categoryName: "",
  design: "",
  nominalDiameter: "",
  productDescription: "",
  productImage: "",
  productImageId: "",
  productName: "",
  process: "",
  shellMatrial: "",
  shellWeight: "",
  temperature: "",
};

export default function Product() {
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState({ ...initialProductData });
  const [selectCategory] = useState("");
  const [productList, setProductList] = useState([]);
  const [getProducts, setGetProducts] = useState("");
  const [edit, setEdit] = useState(false);

  const theme = useTheme();
  const dispatch = useDispatch();
  const categoryData = useSelector((state) => state.AdminCategories.categories);
  const productData = useSelector((state) => state.AdminProduct.products);
  const byCategory = useSelector((state) => state.AdminProduct.byCategory);

  useEffect(() => {
    if (!categoryData) {
      dispatch(getCategories());
    }
    if (!productData) {
      dispatch(getProduct());
    }
    if (categoryData) {
      setCategory(categoryData);
    }
  }, [dispatch, categoryData, productData]);

  useEffect(() => {
    if (byCategory) {
      setProductList(byCategory);
    }
  }, [byCategory]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const uploadImage = (e, type) => {
    if (type === "add") {
      setEdit(false);
      setProduct({ ...product, productImage: e.target.files[0] });
    }
  };

  const submitData = () => {
    setEdit(false);
    dispatch(addProduct(getFormData(product)));
  };

  const deleteProduct = (id, productImage) => {
    dispatch(deleteProductThunk(id, productImage));
  };
  const editProduct = (id) => {
    productList.forEach((m) => {
      if (m._id === id) {
        setProduct({ ...m, productImageId: m.productImage });
      }
    });
    window.scrollTo(0, 0);
    setEdit(true);
  };

  const getProductSelect = (categoryName) => {
    setGetProducts(categoryName);
    dispatch(getProductbyCategory(categoryName));
  };

  return (
    <div className="product-container">
      <div className="category-drop-down">
        <Container component="main" maxWidth="xs">
          <Typography component="h1" variant="h5">
            Add Products
          </Typography>
          <CssBaseline />
          <Box
            component="form"
            noValidate
            // onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <FormControl sx={{ m: 1, width: 1000 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <InputLabel
                    className="label-tag"
                    id="demo-multiple-name-label"
                  >
                    Categories
                  </InputLabel>
                  <Select
                    name="categoryName"
                    className="select-category"
                    style={{ minWidth: 400 }}
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    value={product.categoryName}
                    onChange={(e) => handleChange(e)}
                    input={<OutlinedInput label="Name" />}
                    MenuProps={MenuProps}
                  >
                    {category.map((m) => (
                      <MenuItem
                        key={m._id}
                        value={m.text}
                        style={getStyles(m.text, selectCategory, theme)}
                      >
                        {m.text}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    autoComplete="given-name"
                    name="productName"
                    onChange={(e) => handleChange(e)}
                    required
                    value={product.productName}
                    fullWidth
                    id="firstName"
                    label="Product name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    name="productDescription"
                    value={product.productDescription}
                    id="outlined-multiline-static"
                    label="Product description"
                    onChange={(e) => handleChange(e)}
                    multiline
                    fullWidth
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div className="file-input">
                    <input
                      type="file"
                      onChange={(e) => uploadImage(e, "add")}
                    />
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div className="file-input">
                    {edit && (
                      <img
                        alt=""
                        className="admin-img"
                        src={`https://kinindustries.s3.ap-south-1.amazonaws.com/product/${product.productImage}`}
                      />
                    )}
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-multiline-static"
                    label="Nominal Diameter"
                    onChange={(e) => handleChange(e)}
                    fullWidth
                    name="nominalDiameter"
                    value={product.nominalDiameter}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    value={product.design}
                    fullWidth
                    name="design"
                    onChange={(e) => handleChange(e)}
                    id="design"
                    label="Design"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Shell Matrial"
                    fullWidth
                    name="shellMatrial"
                    onChange={(e) => handleChange(e)}
                    id="shellMatrial"
                    value={product.shellMatrial}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    onChange={(e) => handleChange(e)}
                    id="shellWeight"
                    name="shellWeight"
                    label="Shell weight in grams"
                    value={product.shellWeight}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    name="process"
                    onChange={(e) => handleChange(e)}
                    id="process"
                    value={product.process}
                    label="Process"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    name="application"
                    onChange={(e) => handleChange(e)}
                    value={product.application}
                    id="application"
                    label="Application"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    name="temperature"
                    onChange={(e) => handleChange(e)}
                    value={product.temperature}
                    id="temperature"
                    label="Temperature"
                    autoFocus
                  />
                </Grid>
                {/* <Grid item xs={12} sm={12}>
                  <TextField
                    fullWidth
                    name="shellWeight"
                    onChange={(e) => handleChange(e)}
                    value={product.application}
                    id="application"
                    label="Shell height in grams"
                    autoFocus
                  />
                </Grid> */}
                <Grid container className="mt-2">
                  <Grid item xs={12} sm={6}>
                    <Button
                      color="default"
                      size="large"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      onClick={() => setProduct({ ...initialProductData })}
                    >
                      Clear data
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Button
                      color="primary"
                      size="large"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      onClick={() => submitData()}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </FormControl>
          </Box>
        </Container>
      </div>
      <div className="add-category">
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h6" variant="h6">
                Select the category for viewing products
              </Typography>
              <CssBaseline />
            </Box>
            <FormControl sx={{ m: 1, width: 1000 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <InputLabel
                    className="label-tag"
                    id="demo-multiple-name-label"
                  >
                    Categories
                  </InputLabel>
                  <Select
                    name="categoryName"
                    className="select-category getting-product"
                    style={{ minWidth: 400 }}
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    value={getProducts}
                    onChange={(e) => getProductSelect(e.target.value)}
                    input={<OutlinedInput label="Name" />}
                    MenuProps={MenuProps}
                  >
                    {category.map((m) => (
                      <MenuItem
                        key={m._id}
                        value={m.text}
                        style={getStyles(m.text, getProducts, theme)}
                      >
                        {m.text}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
              </Grid>
            </FormControl>
            {productList.map((m, index) => {
              return (
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={`https://kinindustries.s3.ap-south-1.amazonaws.com/product/${m.productImage}`}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {m.productName}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {m.productDescription}
                      </Typography>
                      <div className="product-feilds">
                        {m.design && m.design !== "" && (
                          <Typography
                            className="feild"
                            variant="body2"
                            color="text.secondary"
                          >
                            <b>Design-</b> {m.design}
                          </Typography>
                        )}
                        {m.categoryName && m.categoryName !== "" && (
                          <Typography
                            className="feild"
                            variant="body2"
                            color="text.secondary"
                          >
                            <b>Category name-</b> {m.categoryName}
                          </Typography>
                        )}
                      </div>

                      <div className="product-feilds">
                        {m.nominalDiameter && m.nominalDiameter !== "" && (
                          <Typography
                            className="feild"
                            variant="body2"
                            color="text.secondary"
                          >
                            <b>Nominal diameter-</b> {m.nominalDiameter}
                          </Typography>
                        )}
                        {m.process && m.process !== "" && (
                          <Typography
                            className="feild"
                            variant="body2"
                            color="text.secondary"
                          >
                            <b>Process-</b> {m.process}
                          </Typography>
                        )}
                      </div>
                      <div className="product-feilds">
                        {m.shellMatrial && m.shellMatrial !== "" && (
                          <Typography
                            className="feild"
                            variant="body2"
                            color="text.secondary"
                          >
                            <b>Shell matrial-</b> {m.shellMatrial}
                          </Typography>
                        )}
                        {m.shellWeight && m.shellWeight !== "" && (
                          <Typography
                            className="feild"
                            variant="body2"
                            color="text.secondary"
                          >
                            <b>Shell weight-</b> {m.shellWeight} gm
                          </Typography>
                        )}
                      </div>
                      <div className="product-feilds">
                        {m.application && m.application !== "" && (
                          <Typography
                            className="feild"
                            variant="body2"
                            color="text.secondary"
                          >
                            <b>Application-</b> {m.application}
                          </Typography>
                        )}
                        {m.temperature && m.temperature !== "" && (
                          <Typography
                            className="feild"
                            variant="body2"
                            color="text.secondary"
                          >
                            <b>Temperature-</b> {m.temperature}
                          </Typography>
                        )}
                      </div>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      onClick={() => deleteProduct(m._id, m.productImage)}
                      size="small"
                      color="primary"
                    >
                      <HighlightOff />
                    </Button>
                    <Button onClick={() => editProduct(m._id)} size="small">
                      <Create />
                    </Button>
                  </CardActions>
                </Card>
              );
            })}
          </Container>
        </ThemeProvider>
      </div>
    </div>
  );
}
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
