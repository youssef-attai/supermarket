import { useSearchParams } from "react-router-dom";
import BrowseProducts from "./browseProducts";
import { useEffect } from "react";

const Products = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({
      food: true,
      drink: true,
    });
  }, []);

  return (
    <>
      <h1 className="m-4 text-center">Products</h1>
      <div className="row">
        <div className="col-3">
          <ul className="list-group">
            <li className="list-group-item d-flex flex-row justify-content-between">
              <label
                className="form-check-label"
                htmlFor="filter-checkbox-food"
              >
                Food
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                checked={searchParams.get("food") == "true"}
                onChange={(e) =>
                  setSearchParams({
                    food: e.target.checked,
                    drink: searchParams.get("drink"),
                  })
                }
                id="filter-checkbox-food"
              />
            </li>
            <li className="list-group-item d-flex flex-row justify-content-between">
              <label
                className="form-check-label"
                htmlFor="filter-checkbox-drink"
              >
                Drink
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                checked={searchParams.get("drink") == "true"}
                onChange={(e) =>
                  setSearchParams({
                    food: searchParams.get("food"),
                    drink: e.target.checked,
                  })
                }
                id="filter-checkbox-drink"
              />
            </li>
          </ul>
        </div>
        <div className="col">
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5">
            <BrowseProducts
              products={props.products.filter(
                (prdct) => searchParams.get(prdct.type) == "true"
              )}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
