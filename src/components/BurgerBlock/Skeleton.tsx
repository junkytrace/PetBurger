import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props: any) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={420}
    viewBox="0 0 280 420"
    backgroundColor="#2e2e2e"
    foregroundColor="#5e5e5e"
    {...props}
  >
    <rect x="20" y="0" rx="81" ry="81" width="240" height="180" />
    <rect x="0" y="200" rx="9" ry="9" width="280" height="30" />
    <rect x="0" y="254" rx="10" ry="10" width="280" height="100" />
    <rect x="0" y="370" rx="7" ry="7" width="90" height="27" />
    <rect x="130" y="370" rx="25" ry="25" width="150" height="46" />
  </ContentLoader>
);

export default Skeleton;
