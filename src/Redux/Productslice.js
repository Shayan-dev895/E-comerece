import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";

export const fetchproducts = createAsyncThunk("product", async () => {
  const response = await fetch("https://dummyjson.com/products?limit=0");
  if (!response.ok) throw new Error("Network response was not ok");

  const res = await response.json();
  return res.products;
});

const initialState = {
  items: [],
  electronics: [],
  selectedCategory: "ALL",
  selectedBrands:[],
  status: "idle"
};

const ProductSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    }
  },
  setBrand: (state, action) => {
  const brand = action.payload;

  if (state.selectedBrands.includes(brand)) {
    state.selectedBrands = state.selectedBrands.filter(
      (b) => b !== brand
    );
  } else {
    state.selectedBrands.push(brand);
  }
},
  extraReducers: (builder) => {
    builder.addCase(fetchproducts.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.items = action.payload;

      state.electronics = action.payload.filter((p) =>
        ["laptops", "mobile-accessories", "tablets", "smartphones", "smart-watches", "Gaming"].includes(p.category)
      );
    });
  }
});

//  SELECTORS (IMPORTANT)


export const selectCategories = createSelector(
  (state) => state.Product.electronics,

  (electronics) => {
    return ["ALL", ...new Set(electronics.map(item => item.category))];
  }
);
export const selectBrands = createSelector(
  (state) => state.Product.electronics,
  (electronics) => ["ALL", ...new Set(electronics.map(i => i.brand))]
);
export const selectProductById = (state, id) => {
  return state.Product.items.find(
    (item) => item.id === Number(id)
  );
};


//  export const selectFilteredProducts = (state) => {
//   const { electronics, selectedCategory, selectedBrands } = state.Product;

//   return electronics.filter((item) => {

//     // category
//     const categoryMatch =
//       selectedCategory === "ALL" ||
//       item.category === selectedCategory;

//     // brand 
//     const brandMatch =
//       selectedBrands.length === 0 ||
//       selectedBrands.includes(item.brand);

//     return categoryMatch && brandMatch;
//   });
// };


export const { setCategory,setBrand } = ProductSlice.actions;
export default ProductSlice.reducer;