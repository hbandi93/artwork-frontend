import ResponsiveGallery from "react-responsive-gallery";
import "./profile.css";

export default function SavedGallery() {
  return (
    <div className="SavedGallery">
      <h3>[username]'s saved pictures</h3>
      <h4>
        Search by keywords
      </h4>
      <label>Search: 
        <input 
          type="text" 
          placeholder="search"
        />
        </label>
      <ResponsiveGallery
        useLightBox
        images={[
          {
            src:
              "https://cdn.pixabay.com/photo/2017/01/14/12/59/iceland-1979445_960_720.jpg",
            lightboxCaption: "image caption",
            lightboxTitle: "image title",
            orderS: 1,
            orderM: 1,
            orderL: 1
          },
          {
            src:
              "https://cdn.pixabay.com/photo/2019/03/09/17/30/horse-4044547_960_720.jpg",
            orderS: 2,
            orderM: 2,
            orderL: 2
          },
          {
            src:
              "https://cdn.pixabay.com/photo/2016/12/04/21/58/rabbit-1882699_960_720.jpg",
            orderS: 4,
            orderM: 3,
            orderL: 6
          },
          {
            src:
              "https://cdn.pixabay.com/photo/2014/07/08/12/36/bird-386725_960_720.jpg",
            orderS: 3,
            orderM: 4,
            orderL: 5
          },
          {
            src:
              "https://cdn.pixabay.com/photo/2015/10/12/15/46/fallow-deer-984573_960_720.jpg",
            orderS: 5,
            orderM: 6,
            orderL: 4
          },
          {
            src:
              "https://cdn.pixabay.com/photo/2014/10/01/10/44/hedgehog-468228_960_720.jpg",
            orderS: 6,
            orderM: 5,
            orderL: 3,
            imgClassName: "img6-style"
          }
        ]}
        screenWidthSizes={{
          xs: 400,
          s: 600,
          m: 800,
          l: 1000,
          xl: 1200
        }}
        numOfImagesPerRow={{
          xs: 1,
          s: 2,
          m: 3,
          l: 4,
          xl: 5,
          xxl: 6
        }}
        imagesPaddingBottom={{
          xs: 5,
          s: 10,
          m: 15,
          l: 20,
          xl: 25,
          xxl: 50
        }}
        imagesMaxWidth={{
          xs: 110,
          s: 110,
          m: 100,
          l: 100,
          xl: 90,
          xxl: 90
        }}
        colsPadding={{
          xs: 2,
          s: 5,
          m: 8,
          l: 10,
          xl: 12,
          xxl: 15
        }}
      />
    </div>
  );
}
