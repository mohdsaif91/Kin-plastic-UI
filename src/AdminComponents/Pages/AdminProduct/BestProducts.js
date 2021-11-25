import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardContent,
  CardActionArea,
  CardActions,
  CardMedia,
  Typography,
  Button,
  Tooltip,
} from "@material-ui/core";
import { HighlightOff } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

import {
  deleteBestProduct,
  getBestProduct,
} from "../../../Redux/Thunks/AdminProduct";

export default function BestProducts() {
  const [best, setBest] = useState([]);

  const dispatch = useDispatch();

  const pageSetting = useSelector((state) => state.AdminProduct.bestProduct);

  const useStylesBootstrap = makeStyles((theme) => ({
    arrow: {
      color: theme.palette.common.black,
    },
    tooltip: {
      backgroundColor: theme.palette.common.black,
      fontSize: "16px",
    },
  }));

  const BootstrapTooltip = (props) => {
    const classes = useStylesBootstrap();

    return <Tooltip arrow classes={classes} {...props} />;
  };

  useEffect(() => {
    if (!pageSetting) {
      dispatch(getBestProduct());
    }
    if (pageSetting) {
      setBest(pageSetting);
    }
  }, [dispatch, pageSetting]);

  const deleteProduct = (id) => {
    // pageSetting.bestProduct = best.filter((f) => f._id !== id);
    dispatch(deleteBestProduct(id));
  };

  return (
    <div className="best-product-container">
      <div className="num-products">Number of Best-Product: {best.length}</div>
      {best.map((m, index) => {
        return (
          <Card className="product-card" sx={{ maxWidth: 345 }}>
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
                  <Typography
                    className="feild"
                    variant="body2"
                    color="text.secondary"
                  >
                    <b>Design-</b> {m.design}
                  </Typography>
                  <Typography
                    className="feild"
                    variant="body2"
                    color="text.secondary"
                  >
                    <b>Category name-</b> {m.categoryName}
                  </Typography>
                </div>
                <div className="product-feilds">
                  <Typography
                    className="feild"
                    variant="body2"
                    color="text.secondary"
                  >
                    <b>Nominal diameter-</b> {m.nominalDiameter}
                  </Typography>
                  <Typography
                    className="feild"
                    variant="body2"
                    color="text.secondary"
                  >
                    <b>Process-</b> {m.process}
                  </Typography>
                </div>
                <div className="product-feilds">
                  <Typography
                    className="feild"
                    variant="body2"
                    color="text.secondary"
                  >
                    <b>Shell matrial-</b> {m.shellMatrial}
                  </Typography>
                  <Typography
                    className="feild"
                    variant="body2"
                    color="text.secondary"
                  >
                    <b>Shell weight-</b> {m.shellWeight}
                  </Typography>
                </div>
                <div className="product-feilds">
                  <Typography
                    className="feild"
                    variant="body2"
                    color="text.secondary"
                  >
                    <b>Application-</b> {m.application}
                  </Typography>
                  <Typography
                    className="feild"
                    variant="body2"
                    color="text.secondary"
                  >
                    <b>Shell height-</b> {m.categoryName}
                  </Typography>
                </div>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <BootstrapTooltip title="Delete Product" placement="right-end">
                <Button
                  onClick={() => deleteProduct(m._id)}
                  size="small"
                  color="secondary"
                >
                  <HighlightOff />
                </Button>
              </BootstrapTooltip>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
}
