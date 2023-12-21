import React from "react";

export default function SimpleIcons(props) {
  const imageProps = {
    src: `https://cdn.simpleicons.org/${props.name}/${props.color ?? "_"}/${
      props.darkModeColor ?? "_"
    }`,
    name: props.name,
    alt: props.alt,
    width: props.width,
    height: props.height,
  };

  return <img {...imageProps} />;
}
