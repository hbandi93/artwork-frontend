import ResponsiveGallery from "react-responsive-gallery";
import { UserContext } from "../context/UserContext";
import React, { useCallback, useContext, useEffect } from "react";
import "./profile.css";

export default function SavedGallery() {
  const [userContext] = useContext(UserContext);
  return (
    
    <div className="SavedGallery">
      <h3>{userContext.details.firstName}
              {userContext.details.lastName &&
                " " + userContext.details.lastName}'s saved artworks</h3>
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
              "https://cdn.pixabay.com/photo/2017/10/31/07/49/horses-2904536_960_720.jpg",
            lightboxCaption: "custom tag 1",
            lightboxTitle: "image title",
            orderS: 1,
            orderM: 1,
            orderL: 1
          },
          {
            src:
              "https://cdn.pixabay.com/photo/2019/03/09/17/30/horse-4044547_960_720.jpg",
              lightboxCaption: "custom tag 2",
            orderS: 2,
            orderM: 2,
            orderL: 2
          },
          {
            src:
              "https://cdn.pixabay.com/photo/2021/02/05/20/38/abstract-5985788_960_720.jpg",
            orderS: 4,
            orderM: 3,
            orderL: 6
          },
          {
            src:
              "https://cdn.pixabay.com/photo/2018/04/22/21/30/bird-3342446_960_720.jpg",
            orderS: 3,
            orderM: 4,
            orderL: 5
          },
          {
            src:
              "https://cdn.pixabay.com/photo/2019/09/24/06/10/red-4500348_960_720.jpg",
            orderS: 5,
            orderM: 6,
            orderL: 4
          },
          {
            src:
              "https://cdn.pixabay.com/photo/2014/10/29/19/15/graffiti-508272_960_720.jpg",
            orderS: 6,
            orderM: 5,
            orderL: 3,
            imgClassName: "img6-style"
          }
        ]}
        screenWidthSizes={{
          xs: 600,
          s: 800,
          m: 1000,
          l: 1200,
          xl: 1400
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
