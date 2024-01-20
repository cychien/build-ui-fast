// support dpi // image-set
// support width // media-query
// support format // image-set, support, multiple background(x)

function Background() {
  return (
    <div className="image-bg h-screen w-screen bg-[length:100%] bg-top bg-no-repeat" />
  );
}

const templateCode = `\
  <div className="image-bg bg-[length:2400px] bg-top bg-no-repeat">
    Content
  </div>

  // CSS, write in the proper place
  .image-bg {
    background-image: url("https://res.cloudinary.com/dgppby8lr/image/upload/w_2400,q_auto/g_north_east,x_100,y_100,l_text:roboto_84:jpg%201x/v1705736997/build-ui-fast/image-bg_dfgg2a.jpg");
    background-image: -webkit-image-set(
        url("https://res.cloudinary.com/dgppby8lr/image/upload/w_2400,q_auto/g_north_east,x_100,y_100,l_text:roboto_84:jpg%201x/v1705736997/build-ui-fast/image-bg_dfgg2a.jpg") 1x,
        url("https://res.cloudinary.com/dgppby8lr/image/upload/w_2400,q_auto/g_north_east,x_100,y_100,l_text:roboto_84:jpg%202x/v1705736997/build-ui-fast/image-bg_dfgg2a.jpg") 2x);
    background-image: image-set(
        url("https://res.cloudinary.com/dgppby8lr/image/upload/w_2400,q_auto/g_north_east,x_100,y_100,l_text:roboto_84:jpg%201x/v1705736997/build-ui-fast/image-bg_dfgg2a.jpg") 1x,
        url("https://res.cloudinary.com/dgppby8lr/image/upload/w_2400,q_auto/g_north_east,x_100,y_100,l_text:roboto_84:jpg%202x/v1705736997/build-ui-fast/image-bg_dfgg2a.jpg") 2x);

    @supports (background-image: url("logo.webp")) {
      background-image: url("https://res.cloudinary.com/dgppby8lr/image/upload/w_2400,q_auto/g_north_east,x_100,y_100,l_text:roboto_84:webp%201x/v1705736997/build-ui-fast/image-bg_dfgg2a.webp");
      background-image: -webkit-image-set(
        url("https://res.cloudinary.com/dgppby8lr/image/upload/w_2400,q_auto/g_north_east,x_100,y_100,l_text:roboto_84:webp%201x/v1705736997/build-ui-fast/image-bg_dfgg2a.webp") 1x,
        url("https://res.cloudinary.com/dgppby8lr/image/upload/w_2400,q_auto/g_north_east,x_100,y_100,l_text:roboto_84:webp%202x/v1705736997/build-ui-fast/image-bg_dfgg2a.webp") 2x);
      background-image: image-set(
        url("https://res.cloudinary.com/dgppby8lr/image/upload/w_2400,q_auto/g_north_east,x_100,y_100,l_text:roboto_84:webp%201x/v1705736997/build-ui-fast/image-bg_dfgg2a.webp") 1x,
        url("https://res.cloudinary.com/dgppby8lr/image/upload/w_2400,q_auto/g_north_east,x_100,y_100,l_text:roboto_84:webp%202x/v1705736997/build-ui-fast/image-bg_dfgg2a.webp") 2x);
    }

    @supports (background-image: url("logo.avif")) {
      background-image: url("https://res.cloudinary.com/dgppby8lr/image/upload/w_2400,q_auto/g_north_east,x_100,y_100,l_text:roboto_84:avif%201x/v1705736997/build-ui-fast/image-bg_dfgg2a.avif");
      background-image: -webkit-image-set(
        url("https://res.cloudinary.com/dgppby8lr/image/upload/w_2400,q_auto/g_north_east,x_100,y_100,l_text:roboto_84:avif%201x/v1705736997/build-ui-fast/image-bg_dfgg2a.avif") 1x,
        url("https://res.cloudinary.com/dgppby8lr/image/upload/w_2400,q_auto/g_north_east,x_100,y_100,l_text:roboto_84:avif%202x/v1705736997/build-ui-fast/image-bg_dfgg2a.avif") 2x);
      background-image: image-set(
        url("https://res.cloudinary.com/dgppby8lr/image/upload/w_2400,q_auto/g_north_east,x_100,y_100,l_text:roboto_84:avif%201x/v1705736997/build-ui-fast/image-bg_dfgg2a.avif") 1x,
        url("https://res.cloudinary.com/dgppby8lr/image/upload/w_2400,q_auto/g_north_east,x_100,y_100,l_text:roboto_84:avif%202x/v1705736997/build-ui-fast/image-bg_dfgg2a.avif") 2x);
    }
  }
  
  // Add more background images if needed
  @media only screen and (min-width: 640px) {
    ...
  }
`;

export default Background;
export { templateCode };
