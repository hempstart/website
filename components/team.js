import Button from "./button"

function Team() {
  return (
    <section id="team">
      <h5 className="label">Our Team</h5>
      <h2>
        We’re an organization that incubates, develops, and partners with
        category leaders within the hemp sector.
      </h2>
      <div className="content">
        <figure className="desktop-only">
          <img src="/static/images/team/babar.jpg" alt="" />
        </figure>
        <figcaption>
          <p>
            We provide investors with direct access to high-performing
            investment brands and direct access to a portfolio of vetted
            companies/brands poised for rapid growth and deep market
            penetration.
          </p>
          <figure className="mobile-only">
            <img src="/static/images/team/babar.png" alt="" />
          </figure>
          <h4>Babar Khan</h4>
          <h5>Founder and Advisor</h5>
          <Button>Schedule a meeting</Button>
        </figcaption>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="765"
        height="1520"
        fill="none"
        className="background"
      >
        <path
          fill="#006341"
          fillOpacity=".03"
          d="M911.41 1431.47c0-32.65 9.127-63.05 24.842-88.54 15.715 25.49 24.842 55.89 24.842 88.54 0 32.64-9.127 63.04-24.842 88.53-15.715-25.49-24.842-55.89-24.842-88.53zM1002.42 1330.66c-16.208 0-31.3-4.59-43.953-12.51 12.653-7.91 27.745-12.51 43.953-12.51 16.2 0 31.3 4.6 43.95 12.51-12.65 7.92-27.75 12.51-43.95 12.51zM977.816 1290.29c-7.474 7.53-16.42 12.54-25.674 14.97 2.416-9.32 7.39-18.33 14.864-25.86 7.474-7.52 16.419-12.53 25.673-14.97-2.415 9.32-7.39 18.33-14.863 25.86zM980.835 1390.4c-15.196-15.31-24.88-34.06-29.052-53.76 19.558 4.2 38.178 13.96 53.377 29.26 15.19 15.31 24.88 34.06 29.05 53.76-19.56-4.2-38.179-13.96-53.375-29.26zM891.696 1390.4c15.196-15.31 24.88-34.06 29.051-53.76-19.557 4.2-38.177 13.96-53.373 29.26-15.197 15.31-24.881 34.06-29.052 53.76 19.558-4.2 38.178-13.96 53.374-29.26zM1124.59 1156.26c-15.72 25.49-24.84 55.89-24.84 88.53 0 32.65 9.12 63.05 24.84 88.54 15.72-25.49 24.84-55.89 24.84-88.54 0-32.64-9.12-63.04-24.84-88.53zM1146.8 1131.48c12.66 7.91 27.75 12.51 43.96 12.51 16.2 0 31.29-4.6 43.95-12.51-12.66-7.91-27.75-12.51-43.95-12.51-16.21 0-31.3 4.6-43.96 12.51zM1140.48 1118.59c9.25-2.44 18.2-7.45 25.67-14.97 7.48-7.53 12.45-16.54 14.87-25.86-9.26 2.43-18.2 7.44-25.68 14.97-7.47 7.53-12.44 16.54-14.86 25.86zM1140.12 1149.97c4.17 19.69 13.86 38.45 29.05 53.75 15.2 15.31 33.82 25.06 53.38 29.26-4.17-19.7-13.86-38.45-29.06-53.75-15.19-15.31-33.81-25.06-53.37-29.26zM1109.08 1149.97c-4.17 19.69-13.85 38.45-29.05 53.75-15.19 15.31-33.81 25.06-53.37 29.26 4.17-19.7 13.86-38.45 29.05-53.75 15.2-15.31 33.82-25.06 53.37-29.26zM1310.74 971.807c-15.72 25.487-24.84 55.893-24.84 88.533s9.12 63.05 24.84 88.53c15.71-25.48 24.84-55.89 24.84-88.53s-9.13-63.046-24.84-88.533zM1332.95 947.027c12.66 7.914 27.75 12.51 43.95 12.51 16.21 0 31.3-4.596 43.96-12.51-12.66-7.914-27.75-12.51-43.96-12.51-16.2 0-31.29 4.596-43.95 12.51zM1326.63 934.134c9.25-2.433 18.2-7.443 25.67-14.97 7.47-7.527 12.45-16.537 14.86-25.858-9.25 2.433-18.19 7.443-25.67 14.97-7.47 7.527-12.45 16.537-14.86 25.858zM1326.27 965.514c4.17 19.698 13.85 38.456 29.05 53.756 15.2 15.31 33.82 25.06 53.37 29.26-4.17-19.7-13.85-38.45-29.05-53.756-15.19-15.305-33.81-25.059-53.37-29.26zM1295.23 965.514c-4.17 19.698-13.85 38.456-29.05 53.756-15.19 15.31-33.81 25.06-53.37 29.26 4.17-19.7 13.85-38.45 29.05-53.756 15.2-15.305 33.82-25.059 53.37-29.26zM1499.08 785.132c-15.72 25.487-24.85 55.889-24.85 88.533 0 32.645 9.13 63.046 24.85 88.533 15.71-25.487 24.84-55.888 24.84-88.533 0-32.644-9.13-63.046-24.84-88.533zM1521.29 760.352c12.65 7.914 27.75 12.511 43.95 12.511 16.21 0 31.3-4.597 43.95-12.511-12.65-7.914-27.74-12.51-43.95-12.51-16.2 0-31.3 4.596-43.95 12.51zM1514.97 747.459c9.25-2.433 18.2-7.443 25.67-14.97 7.47-7.527 12.45-16.537 14.86-25.857-9.25 2.433-18.2 7.443-25.67 14.97-7.47 7.527-12.45 16.537-14.86 25.857zM1514.61 778.839c4.17 19.698 13.85 38.452 29.05 53.757 15.19 15.305 33.81 25.058 53.37 29.259-4.17-19.697-13.85-38.451-29.05-53.756-15.2-15.305-33.82-25.058-53.37-29.26zM1483.57 778.839c-4.17 19.698-13.85 38.452-29.05 53.757-15.2 15.305-33.82 25.058-53.37 29.259 4.17-19.697 13.85-38.451 29.05-53.756 15.19-15.305 33.81-25.058 53.37-29.26zM1318.08 869.299c16.2 0 31.3 4.596 43.95 12.51-12.65 7.914-27.75 12.51-43.95 12.51-16.21 0-31.3-4.596-43.95-12.51 12.65-7.914 27.74-12.51 43.95-12.51zM1409.09 768.496c0 32.645-9.13 63.046-24.85 88.533-15.71-25.487-24.84-55.888-24.84-88.533 0-32.644 9.13-63.046 24.84-88.533 15.72 25.487 24.85 55.889 24.85 88.533zM1368.71 863.322c-4.17-19.698-13.85-38.451-29.05-53.756-15.19-15.305-33.81-25.059-53.37-29.26 4.17 19.698 13.85 38.451 29.05 53.756 15.2 15.305 33.82 25.059 53.37 29.26zM1166.5 1064.47c-12.66-7.91-27.75-12.51-43.95-12.51-16.21 0-31.3 4.6-43.96 12.51 12.66 7.92 27.75 12.51 43.96 12.51 16.2 0 31.29-4.59 43.95-12.51zM1188.71 1039.7c15.72-25.49 24.84-55.893 24.84-88.538 0-32.644-9.12-63.046-24.84-88.533-15.71 25.487-24.84 55.889-24.84 88.533 0 32.645 9.13 63.048 24.84 88.538zM1144.13 992.232c15.2 15.308 24.88 34.058 29.05 53.758-19.56-4.2-38.18-13.96-53.37-29.26-15.2-15.31-24.88-34.061-29.05-53.758 19.55 4.201 38.17 13.954 53.37 29.26zM1552.56 690.69c-12.66-7.914-27.75-12.51-43.95-12.51-16.21 0-31.3 4.596-43.96 12.51 12.66 7.914 27.75 12.51 43.96 12.51 16.2 0 31.29-4.596 43.95-12.51zM1574.77 665.91c15.72-25.487 24.84-55.888 24.84-88.533 0-32.644-9.12-63.046-24.84-88.533-15.71 25.487-24.84 55.889-24.84 88.533 0 32.645 9.13 63.046 24.84 88.533zM1530.19 618.447c15.2 15.305 24.88 34.058 29.05 53.756-19.56-4.201-38.18-13.955-53.37-29.26-15.2-15.305-24.88-34.058-29.05-53.756 19.55 4.201 38.17 13.955 53.37 29.26zM1619.33 618.447c-15.2 15.305-24.88 34.058-29.05 53.756 19.55-4.201 38.17-13.955 53.37-29.26 15.2-15.305 24.88-34.058 29.05-53.756-19.56 4.201-38.18 13.955-53.37 29.26zM987.544 1252.94c-12.653-7.92-27.745-12.51-43.951-12.51s-31.299 4.59-43.952 12.51c12.653 7.91 27.746 12.51 43.952 12.51s31.298-4.6 43.951-12.51zM1009.76 1228.16c15.71-25.49 24.84-55.89 24.84-88.54 0-32.64-9.13-63.04-24.84-88.53-15.716 25.49-24.843 55.89-24.843 88.53 0 32.65 9.127 63.05 24.843 88.54zM965.176 1180.69c15.196 15.31 24.88 34.06 29.052 53.76-19.558-4.2-38.178-13.96-53.374-29.26-15.196-15.31-24.88-34.06-29.052-53.76 19.558 4.2 38.178 13.96 53.374 29.26zM805.531 1450.28c-9.254 2.44-18.2 7.45-25.674 14.97-7.473 7.53-12.448 16.54-14.863 25.86 9.254-2.43 18.2-7.44 25.673-14.97 7.474-7.53 12.448-16.54 14.864-25.86zM799.206 1437.39c-12.652-7.92-27.745-12.51-43.951-12.51s-31.299 4.59-43.951 12.51c12.652 7.91 27.745 12.51 43.951 12.51s31.299-4.6 43.951-12.51zM821.421 1412.61c15.715-25.49 24.842-55.89 24.842-88.53 0-32.65-9.127-63.05-24.842-88.54-15.715 25.49-24.842 55.89-24.842 88.54 0 32.64 9.127 63.04 24.842 88.53zM805.89 1418.9c-4.171-19.7-13.856-38.45-29.052-53.75-15.196-15.31-33.816-25.06-53.373-29.26 4.171 19.69 13.855 38.45 29.051 53.75 15.196 15.31 33.816 25.06 53.374 29.26zM1228.1 659.102c-15.71 25.487-24.84 55.888-24.84 88.533 0 32.644 9.13 63.046 24.84 88.533 15.72-25.487 24.84-55.889 24.84-88.533 0-32.645-9.12-63.046-24.84-88.533zM1250.32 634.322c12.65 7.914 27.74 12.51 43.95 12.51 16.2 0 31.3-4.596 43.95-12.51-12.65-7.914-27.75-12.51-43.95-12.51-16.21 0-31.3 4.596-43.95 12.51zM1243.99 621.429c9.26-2.433 18.2-7.443 25.68-14.97 7.47-7.527 12.44-16.537 14.86-25.858-9.25 2.433-18.2 7.443-25.67 14.971-7.48 7.527-12.45 16.537-14.87 25.857zM1243.63 652.809c4.18 19.698 13.86 38.451 29.06 53.757 15.19 15.305 33.81 25.058 53.37 29.259-4.17-19.697-13.86-38.451-29.05-53.756-15.2-15.305-33.82-25.059-53.38-29.26zM1212.6 652.809c-4.17 19.698-13.86 38.451-29.05 53.757-15.2 15.305-33.82 25.058-53.38 29.259 4.17-19.697 13.86-38.451 29.05-53.756 15.2-15.305 33.82-25.059 53.38-29.26zM1014.92 934.31c0-32.645 9.13-63.046 24.84-88.533 15.72 25.487 24.85 55.888 24.85 88.533 0 32.644-9.13 63.046-24.85 88.53-15.71-25.484-24.84-55.886-24.84-88.53zM1105.93 833.507c-16.21 0-31.3-4.596-43.95-12.51 12.65-7.914 27.74-12.51 43.95-12.51 16.21 0 31.3 4.596 43.95 12.51-12.65 7.914-27.74 12.51-43.95 12.51zM1081.33 793.133c-7.47 7.528-16.42 12.538-25.67 14.971 2.41-9.321 7.39-18.331 14.86-25.858 7.47-7.527 16.42-12.537 25.67-14.97-2.41 9.32-7.39 18.33-14.86 25.857zM1084.35 893.24c-15.2-15.305-24.88-34.058-29.05-53.756 19.55 4.201 38.17 13.955 53.37 29.26 15.2 15.305 24.88 34.058 29.05 53.756-19.56-4.201-38.18-13.955-53.37-29.26zM995.208 893.24c15.192-15.305 24.882-34.058 29.052-53.756-19.56 4.201-38.177 13.955-53.374 29.26-15.196 15.305-24.88 34.058-29.051 53.756 19.557-4.201 38.177-13.955 53.373-29.26zM1091.06 755.779c-12.66-7.914-27.75-12.51-43.95-12.51-16.21 0-31.3 4.596-43.96 12.51 12.66 7.914 27.75 12.51 43.96 12.51 16.2 0 31.29-4.596 43.95-12.51zM1113.27 730.999c15.72-25.487 24.84-55.888 24.84-88.533s-9.12-63.046-24.84-88.533c-15.71 25.487-24.84 55.888-24.84 88.533s9.13 63.046 24.84 88.533zM1068.69 683.535c15.19 15.306 24.88 34.059 29.05 53.757-19.56-4.201-38.18-13.955-53.37-29.26-15.2-15.305-24.88-34.059-29.06-53.756 19.56 4.201 38.18 13.954 53.38 29.259zM851.573 925.935c16.206 0 31.299 4.596 43.951 12.51-12.652 7.914-27.745 12.51-43.951 12.51s-31.299-4.596-43.951-12.51c12.652-7.914 27.745-12.51 43.951-12.51zM942.581 825.132c0 32.645-9.127 63.046-24.842 88.533-15.715-25.487-24.842-55.888-24.842-88.533s9.127-63.046 24.842-88.533c15.715 25.487 24.842 55.888 24.842 88.533zM902.208 919.958c-4.171-19.698-13.855-38.451-29.052-53.757-15.196-15.305-33.816-25.058-53.373-29.259 4.171 19.697 13.855 38.451 29.051 53.756 15.196 15.305 33.816 25.059 53.374 29.26zM1237.63 552.15c16.21 0 31.3 4.596 43.95 12.51-12.65 7.914-27.74 12.51-43.95 12.51-16.2 0-31.3-4.596-43.95-12.51 12.65-7.914 27.75-12.51 43.95-12.51zM1328.64 451.347c0 32.645-9.13 63.046-24.84 88.533-15.72-25.487-24.84-55.888-24.84-88.533 0-32.644 9.12-63.046 24.84-88.533 15.71 25.487 24.84 55.889 24.84 88.533zM1288.27 546.173c-4.17-19.698-13.86-38.451-29.05-53.756-15.2-15.305-33.82-25.059-53.38-29.26 4.17 19.697 13.86 38.451 29.05 53.756 15.2 15.305 33.82 25.059 53.38 29.26zM1319.3 546.173c4.18-19.698 13.86-38.451 29.06-53.756 15.19-15.305 33.81-25.059 53.37-29.26-4.17 19.697-13.86 38.451-29.05 53.756-15.2 15.305-33.82 25.059-53.38 29.26zM828.775 1118.76c0-32.64 9.127-63.04 24.842-88.53 15.715 25.49 24.842 55.89 24.842 88.53 0 32.65-9.127 63.05-24.842 88.54-15.715-25.49-24.842-55.89-24.842-88.54zM919.783 1017.96c-16.206 0-31.298-4.6-43.951-12.51 12.653-7.915 27.745-12.511 43.951-12.511s31.299 4.596 43.952 12.511c-12.653 7.91-27.746 12.51-43.952 12.51zM895.181 977.586c-7.474 7.527-16.419 12.537-25.674 14.97 2.416-9.32 7.39-18.33 14.864-25.857 7.474-7.528 16.419-12.537 25.673-14.971-2.415 9.321-7.39 18.331-14.863 25.858zM898.2 1077.69c-15.196-15.3-24.88-34.06-29.052-53.75 19.558 4.2 38.178 13.95 53.374 29.26 15.196 15.3 24.88 34.05 29.052 53.75-19.558-4.2-38.178-13.95-53.374-29.26zM809.061 1077.69c15.196-15.3 24.88-34.06 29.051-53.75-19.557 4.2-38.177 13.95-53.373 29.26-15.197 15.3-24.881 34.05-29.052 53.75 19.558-4.2 38.178-13.95 53.374-29.26zM665.28 1216.9c-15.716 25.49-24.843 55.89-24.843 88.54 0 32.64 9.127 63.04 24.842 88.53 15.716-25.49 24.843-55.89 24.843-88.53 0-32.65-9.127-63.05-24.842-88.54zM687.494 1192.12c12.653 7.92 27.745 12.51 43.951 12.51 16.207 0 31.299-4.59 43.952-12.51-12.653-7.91-27.745-12.51-43.952-12.51-16.206 0-31.298 4.6-43.951 12.51zM681.17 1179.23c9.254-2.43 18.2-7.44 25.673-14.97 7.474-7.53 12.448-16.54 14.864-25.86-9.254 2.44-18.2 7.45-25.674 14.97-7.473 7.53-12.448 16.54-14.863 25.86zM680.811 1210.61c4.171 19.7 13.855 38.45 29.051 53.76 15.196 15.3 33.816 25.06 53.374 29.26-4.171-19.7-13.856-38.45-29.052-53.76-15.196-15.3-33.816-25.06-53.373-29.26zM649.774 1210.61c-4.171 19.7-13.855 38.45-29.051 53.76-15.196 15.3-33.816 25.06-53.374 29.26 4.172-19.7 13.856-38.45 29.052-53.76 15.196-15.3 33.816-25.06 53.373-29.26zM672.62 1114.4c16.206 0 31.299 4.59 43.951 12.51-12.652 7.91-27.745 12.51-43.951 12.51s-31.299-4.6-43.952-12.51c12.653-7.92 27.746-12.51 43.952-12.51zM763.628 1013.59c0 32.65-9.127 63.05-24.842 88.54-15.715-25.49-24.842-55.89-24.842-88.54 0-32.641 9.127-63.042 24.842-88.529 15.715 25.487 24.842 55.888 24.842 88.529zM723.255 1108.42c-4.171-19.7-13.856-38.45-29.052-53.76-15.196-15.3-33.816-25.06-53.373-29.26 4.171 19.7 13.855 38.45 29.051 53.76 15.196 15.3 33.816 25.06 53.374 29.26zM508.885 1339.22c7.473-7.52 16.419-12.53 25.673-14.97-2.416 9.32-7.39 18.33-14.864 25.86-7.473 7.53-16.419 12.54-25.673 14.97 2.416-9.32 7.39-18.33 14.864-25.86zM484.282 1298.85c16.206 0 31.299 4.59 43.952 12.51-12.653 7.91-27.746 12.51-43.952 12.51s-31.298-4.6-43.951-12.51c12.653-7.92 27.745-12.51 43.951-12.51zM575.29 1198.05c0 32.64-9.127 63.04-24.842 88.53-15.715-25.49-24.842-55.89-24.842-88.53 0-32.65 9.127-63.05 24.842-88.54 15.715 25.49 24.842 55.89 24.842 88.54zM505.865 1239.12c15.197 15.3 24.881 34.05 29.052 53.75-19.557-4.2-38.177-13.95-53.374-29.26-15.196-15.3-24.88-34.06-29.051-53.75 19.557 4.2 38.177 13.95 53.373 29.26zM1033.9 510.851c0-32.645 9.13-63.046 24.84-88.533 15.72 25.487 24.85 55.888 24.85 88.533s-9.13 63.046-24.85 88.533c-15.71-25.487-24.84-55.888-24.84-88.533zM1124.91 410.048c-16.21 0-31.3-4.596-43.95-12.51 12.65-7.914 27.74-12.51 43.95-12.51 16.21 0 31.3 4.596 43.95 12.51-12.65 7.914-27.74 12.51-43.95 12.51zM1100.31 369.675c-7.48 7.527-16.42 12.537-25.67 14.97 2.41-9.32 7.39-18.33 14.86-25.857 7.47-7.527 16.42-12.537 25.67-14.971-2.41 9.321-7.39 18.331-14.86 25.858zM1103.33 469.782c-15.2-15.306-24.88-34.059-29.05-53.757 19.55 4.201 38.17 13.955 53.37 29.26 15.2 15.305 24.88 34.059 29.05 53.756-19.56-4.201-38.18-13.954-53.37-29.259zM1014.19 469.782c15.19-15.306 24.88-34.059 29.05-53.757-19.56 4.201-38.18 13.955-53.374 29.26-15.196 15.305-24.88 34.059-29.051 53.756 19.557-4.201 38.177-13.954 53.375-29.259zM870.407 608.993c-15.715 25.487-24.842 55.888-24.842 88.533 0 32.644 9.127 63.046 24.842 88.533 15.715-25.487 24.842-55.889 24.842-88.533 0-32.645-9.127-63.046-24.842-88.533zM892.622 584.213c12.652 7.914 27.745 12.51 43.951 12.51s31.299-4.596 43.951-12.51c-12.652-7.914-27.745-12.51-43.951-12.51s-31.299 4.596-43.951 12.51zM886.297 571.32c9.254-2.433 18.2-7.443 25.674-14.97 7.473-7.527 12.447-16.537 14.863-25.858-9.254 2.433-18.2 7.443-25.673 14.97-7.474 7.527-12.448 16.537-14.864 25.858zM885.938 602.7c4.171 19.698 13.856 38.451 29.052 53.756s33.816 25.059 53.373 29.26c-4.171-19.698-13.855-38.451-29.051-53.756-15.196-15.305-33.816-25.059-53.374-29.26zM854.902 602.7c-4.171 19.698-13.855 38.451-29.051 53.756-15.197 15.305-33.817 25.059-53.374 29.26 4.171-19.698 13.855-38.451 29.051-53.756 15.197-15.305 33.817-25.059 53.374-29.26zM877.747 506.485c16.206 0 31.299 4.596 43.952 12.51-12.653 7.914-27.746 12.51-43.952 12.51s-31.298-4.596-43.951-12.51c12.653-7.914 27.745-12.51 43.951-12.51zM968.755 405.682c0 32.645-9.127 63.046-24.842 88.533-15.715-25.487-24.842-55.888-24.842-88.533 0-32.644 9.127-63.046 24.842-88.533 15.715 25.487 24.842 55.889 24.842 88.533zM928.382 500.508c-4.171-19.698-13.855-38.451-29.051-53.756-15.197-15.306-33.817-25.059-53.374-29.26 4.171 19.697 13.855 38.451 29.051 53.756 15.197 15.305 33.817 25.059 53.374 29.26zM726.166 701.661c-12.652-7.914-27.745-12.51-43.951-12.51s-31.299 4.596-43.951 12.51c12.652 7.914 27.745 12.51 43.951 12.51s31.299-4.596 43.951-12.51zM748.381 676.881c15.715-25.487 24.842-55.888 24.842-88.533 0-32.644-9.127-63.046-24.842-88.533-15.715 25.487-24.842 55.889-24.842 88.533 0 32.645 9.127 63.046 24.842 88.533zM703.798 629.417c15.197 15.306 24.881 34.059 29.052 53.757-19.558-4.201-38.178-13.955-53.374-29.26-15.196-15.305-24.88-34.059-29.051-53.756 19.557 4.201 38.177 13.954 53.373 29.259zM1112.23 327.876c-12.66-7.914-27.75-12.51-43.95-12.51-16.21 0-31.3 4.596-43.96 12.51 12.66 7.914 27.75 12.51 43.96 12.51 16.2 0 31.29-4.596 43.95-12.51zM1134.44 303.096c15.72-25.487 24.84-55.888 24.84-88.533 0-32.644-9.12-63.046-24.84-88.533-15.71 25.487-24.84 55.889-24.84 88.533 0 32.645 9.13 63.046 24.84 88.533zM1089.86 255.633c15.19 15.305 24.88 34.058 29.05 53.756-19.56-4.201-38.18-13.955-53.37-29.26-15.2-15.305-24.88-34.058-29.05-53.756 19.55 4.201 38.17 13.955 53.37 29.26zM1179 255.633c-15.2 15.305-24.88 34.058-29.05 53.756 19.55-4.201 38.17-13.955 53.37-29.26 15.2-15.305 24.88-34.058 29.05-53.756-19.56 4.201-38.18 13.955-53.37 29.26zM684.259 793.445c-15.715 25.487-24.842 55.889-24.842 88.533 0 32.645 9.127 63.046 24.842 88.533 15.715-25.487 24.842-55.888 24.842-88.533 0-32.644-9.127-63.046-24.842-88.533zM706.474 768.665c12.653 7.914 27.745 12.511 43.951 12.511s31.299-4.597 43.952-12.511c-12.653-7.914-27.746-12.51-43.952-12.51s-31.298 4.596-43.951 12.51zM700.149 755.772c9.255-2.433 18.2-7.443 25.674-14.97 7.473-7.527 12.448-16.537 14.863-25.857-9.254 2.433-18.199 7.443-25.673 14.97-7.474 7.527-12.448 16.537-14.864 25.857zM699.79 787.152c4.172 19.698 13.856 38.452 29.052 53.757s33.816 25.058 53.373 29.259c-4.171-19.697-13.855-38.451-29.051-53.756-15.196-15.305-33.816-25.058-53.374-29.26zM668.754 787.152c-4.171 19.698-13.855 38.452-29.051 53.757-15.196 15.305-33.816 25.058-53.374 29.259 4.171-19.697 13.855-38.451 29.052-53.756 15.196-15.305 33.816-25.058 53.373-29.26zM471.079 1068.65c0-32.64 9.127-63.04 24.843-88.53 15.715 25.49 24.842 55.89 24.842 88.53 0 32.65-9.127 63.05-24.842 88.54-15.716-25.49-24.843-55.89-24.843-88.54zM562.087 967.85c-16.206 0-31.298-4.596-43.951-12.51 12.653-7.914 27.745-12.51 43.951-12.51s31.299 4.596 43.952 12.51c-12.653 7.914-27.746 12.51-43.952 12.51zM537.485 927.477c-7.473 7.527-16.419 12.537-25.673 14.97 2.415-9.321 7.39-18.331 14.863-25.858 7.474-7.527 16.42-12.537 25.674-14.97-2.416 9.321-7.39 18.331-14.864 25.858zM540.504 1027.58c-15.196-15.3-24.88-34.055-29.051-53.753 19.557 4.201 38.177 13.955 53.373 29.263 15.196 15.3 24.881 34.06 29.052 53.75-19.558-4.2-38.178-13.95-53.374-29.26zM451.365 1027.58c15.196-15.3 24.88-34.055 29.051-53.753-19.557 4.201-38.177 13.955-53.373 29.263-15.196 15.3-24.88 34.06-29.052 53.75 19.558-4.2 38.178-13.95 53.374-29.26zM547.213 890.122c-12.652-7.914-27.745-12.51-43.951-12.51s-31.299 4.596-43.951 12.51c12.652 7.914 27.745 12.511 43.951 12.511s31.299-4.597 43.951-12.511zM569.428 865.343c15.715-25.487 24.842-55.889 24.842-88.533 0-32.645-9.127-63.046-24.842-88.533-15.715 25.487-24.842 55.888-24.842 88.533 0 32.644 9.127 63.046 24.842 88.533zM524.845 817.879c15.196 15.305 24.881 34.059 29.052 53.756-19.558-4.201-38.178-13.954-53.374-29.259-15.196-15.305-24.88-34.059-29.051-53.757 19.557 4.201 38.177 13.955 53.373 29.26zM365.2 1087.47c-9.254 2.43-18.2 7.44-25.673 14.97-7.474 7.53-12.448 16.54-14.864 25.86 9.254-2.44 18.2-7.45 25.673-14.97 7.474-7.53 12.448-16.54 14.864-25.86zM358.876 1074.57c-12.653-7.91-27.746-12.51-43.952-12.51s-31.298 4.6-43.951 12.51c12.653 7.92 27.745 12.51 43.951 12.51s31.299-4.59 43.952-12.51zM381.09 1049.8c15.715-25.49 24.842-55.893 24.842-88.538 0-32.644-9.127-63.046-24.842-88.533-15.715 25.487-24.842 55.889-24.842 88.533 0 32.645 9.127 63.048 24.842 88.538zM365.559 1056.09c-4.171-19.7-13.855-38.45-29.052-53.76-15.196-15.304-33.816-25.057-53.373-29.258 4.171 19.697 13.855 38.448 29.051 53.758 15.197 15.3 33.816 25.06 53.374 29.26zM787.772 296.288c-15.715 25.487-24.842 55.888-24.842 88.533 0 32.644 9.127 63.046 24.842 88.533 15.715-25.487 24.842-55.889 24.842-88.533 0-32.645-9.127-63.046-24.842-88.533zM809.987 271.508c12.652 7.914 27.745 12.51 43.951 12.51s31.299-4.596 43.951-12.51c-12.652-7.914-27.745-12.51-43.951-12.51s-31.299 4.596-43.951 12.51zM803.662 258.615c9.254-2.433 18.2-7.443 25.674-14.97 7.473-7.527 12.447-16.537 14.863-25.858-9.254 2.433-18.2 7.443-25.673 14.97-7.474 7.527-12.448 16.537-14.864 25.858zM803.303 289.995c4.171 19.698 13.856 38.451 29.052 53.756 15.196 15.306 33.816 25.059 53.373 29.26-4.171-19.697-13.855-38.451-29.051-53.756-15.196-15.305-33.816-25.059-53.374-29.26zM772.267 289.995c-4.171 19.698-13.855 38.451-29.051 53.756-15.197 15.306-33.817 25.059-53.374 29.26 4.171-19.698 13.855-38.451 29.051-53.756 15.197-15.305 33.817-25.059 53.374-29.26zM574.592 571.496c0-32.645 9.127-63.046 24.842-88.533 15.715 25.487 24.842 55.888 24.842 88.533 0 32.644-9.127 63.046-24.842 88.533-15.715-25.487-24.842-55.889-24.842-88.533zM665.6 470.693c-16.206 0-31.298-4.596-43.951-12.51 12.653-7.914 27.745-12.51 43.951-12.51s31.299 4.596 43.952 12.51c-12.653 7.914-27.746 12.51-43.952 12.51zM640.998 430.319c-7.474 7.527-16.419 12.537-25.673 14.971 2.415-9.321 7.389-18.331 14.863-25.858 7.474-7.527 16.419-12.537 25.673-14.97-2.415 9.32-7.39 18.33-14.863 25.857zM644.017 530.426c-15.196-15.305-24.88-34.058-29.052-53.756 19.558 4.201 38.178 13.954 53.374 29.26 15.196 15.305 24.88 34.058 29.052 53.756-19.558-4.201-38.178-13.955-53.374-29.26zM554.878 530.426c15.196-15.305 24.88-34.058 29.051-53.756-19.557 4.201-38.177 13.954-53.373 29.26-15.197 15.305-24.881 34.058-29.052 53.756 19.558-4.201 38.178-13.955 53.374-29.26zM650.726 392.965c-12.653-7.914-27.745-12.51-43.952-12.51-16.206 0-31.298 4.596-43.951 12.51 12.653 7.914 27.745 12.51 43.951 12.51 16.207 0 31.299-4.596 43.952-12.51zM672.94 368.185c15.716-25.487 24.842-55.888 24.842-88.533s-9.126-63.046-24.842-88.533c-15.715 25.487-24.842 55.888-24.842 88.533s9.127 63.046 24.842 88.533zM628.358 320.721c15.196 15.305 24.88 34.059 29.051 53.757-19.557-4.201-38.177-13.955-53.373-29.26-15.197-15.305-24.881-34.059-29.052-53.756 19.558 4.201 38.178 13.954 53.374 29.259zM411.242 563.121c16.206 0 31.299 4.596 43.952 12.51-12.653 7.914-27.746 12.51-43.952 12.51s-31.298-4.596-43.951-12.51c12.653-7.914 27.745-12.51 43.951-12.51zM502.25 462.318c0 32.645-9.127 63.046-24.842 88.533-15.715-25.487-24.842-55.888-24.842-88.533s9.127-63.046 24.842-88.533c15.715 25.487 24.842 55.888 24.842 88.533zM461.877 557.144c-4.171-19.698-13.855-38.452-29.051-53.757-15.197-15.305-33.817-25.058-53.374-29.259 4.171 19.697 13.855 38.451 29.051 53.756 15.197 15.305 33.817 25.059 53.374 29.26zM797.303 189.336c16.206 0 31.298 4.596 43.951 12.51-12.653 7.914-27.745 12.51-43.951 12.51-16.207 0-31.299-4.596-43.952-12.51 12.653-7.914 27.745-12.51 43.952-12.51zM888.311 88.5331c0 32.6449-9.127 63.0459-24.843 88.5329-15.715-25.487-24.842-55.888-24.842-88.5329 0-32.6444 9.127-63.0459 24.842-88.53294931C879.184 25.4872 888.311 55.8887 888.311 88.5331zM847.937 183.359c-4.171-19.698-13.855-38.451-29.051-53.756-15.196-15.305-33.816-25.059-53.374-29.26 4.171 19.697 13.855 38.451 29.052 53.756 15.196 15.305 33.816 25.059 53.373 29.26zM878.973 183.359c4.172-19.698 13.856-38.451 29.052-53.756s33.816-25.059 53.374-29.26c-4.172 19.697-13.856 38.451-29.052 53.756s-33.816 25.059-53.374 29.26zM388.444 755.948c0-32.645 9.127-63.046 24.842-88.533 15.716 25.487 24.843 55.888 24.843 88.533s-9.127 63.046-24.843 88.533c-15.715-25.487-24.842-55.888-24.842-88.533zM479.452 655.145c-16.206 0-31.298-4.596-43.951-12.51 12.653-7.914 27.745-12.51 43.951-12.51 16.207 0 31.299 4.596 43.952 12.51-12.653 7.914-27.745 12.51-43.952 12.51zM454.85 614.772c-7.473 7.527-16.419 12.537-25.673 14.97 2.415-9.32 7.39-18.33 14.863-25.857 7.474-7.528 16.42-12.538 25.674-14.971-2.416 9.321-7.39 18.331-14.864 25.858zM457.869 714.879c-15.196-15.306-24.88-34.059-29.051-53.757 19.557 4.201 38.177 13.955 53.373 29.26 15.196 15.305 24.88 34.059 29.052 53.756-19.558-4.201-38.178-13.954-53.374-29.259zM368.73 714.879c15.196-15.306 24.88-34.059 29.051-53.757-19.557 4.201-38.177 13.955-53.373 29.26-15.196 15.305-24.88 34.059-29.052 53.756 19.558-4.201 38.178-13.954 53.374-29.259zM224.949 854.09c-15.716 25.487-24.842 55.888-24.842 88.533 0 32.644 9.126 63.047 24.842 88.537 15.715-25.49 24.842-55.893 24.842-88.537 0-32.645-9.127-63.046-24.842-88.533zM247.163 829.31c12.653 7.914 27.746 12.51 43.952 12.51s31.298-4.596 43.951-12.51c-12.653-7.914-27.745-12.51-43.951-12.51s-31.299 4.596-43.952 12.51zM240.839 816.417c9.254-2.433 18.2-7.443 25.673-14.971 7.474-7.527 12.448-16.536 14.864-25.857-9.254 2.433-18.2 7.443-25.674 14.97-7.473 7.527-12.447 16.537-14.863 25.858zM240.48 847.797c4.171 19.698 13.855 38.451 29.051 53.756 15.197 15.305 33.816 25.059 53.374 29.26-4.171-19.698-13.855-38.451-29.052-53.756-15.196-15.305-33.816-25.059-53.373-29.26zM209.444 847.797c-4.171 19.698-13.856 38.451-29.052 53.756s-33.816 25.059-53.373 29.26c4.171-19.698 13.855-38.451 29.051-53.756 15.196-15.305 33.816-25.059 53.374-29.26zM232.289 751.582c16.206 0 31.299 4.596 43.952 12.51-12.653 7.914-27.746 12.51-43.952 12.51s-31.298-4.596-43.951-12.51c12.653-7.914 27.745-12.51 43.951-12.51zM323.297 650.78c0 32.644-9.127 63.046-24.842 88.533-15.715-25.487-24.842-55.889-24.842-88.533 0-32.645 9.127-63.046 24.842-88.533 15.715 25.487 24.842 55.888 24.842 88.533zM282.924 745.605c-4.171-19.697-13.855-38.451-29.051-53.756-15.197-15.305-33.817-25.059-53.374-29.26 4.171 19.698 13.855 38.451 29.051 53.757 15.197 15.305 33.817 25.058 53.374 29.259zM68.5537 976.408c7.4736-7.527 16.4194-12.537 25.6734-14.97-2.4157 9.32-7.3899 18.33-14.8634 25.857-7.4737 7.528-16.4193 12.538-25.6735 14.975 2.4158-9.325 7.39-18.335 14.8635-25.862zM43.9515 936.035c16.2059 0 31.2985 4.596 43.9512 12.51-12.6527 7.914-27.7453 12.51-43.9512 12.51-16.2061 0-31.2988-4.596-43.95146218-12.51C12.6527 940.631 27.7454 936.035 43.9515 936.035zM134.96 835.232c0 32.645-9.127 63.046-24.843 88.533-15.7149-25.487-24.8417-55.888-24.8417-88.533s9.1268-63.046 24.8417-88.533c15.716 25.487 24.843 55.888 24.843 88.533zM65.5347 876.301c15.1963 15.306 24.8804 34.059 29.0515 53.757-19.5575-4.201-38.1775-13.955-53.3736-29.26-15.1962-15.305-24.8803-34.059-29.0515-53.756 19.5576 4.201 38.1776 13.954 53.3736 29.259z"
        />
      </svg>
      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          height: var(--full-height);
          max-width: var(--inner-width);
          margin: 0 auto;
          padding: var(--gap);
          position: relative;
        }

        h2 {
          margin-bottom: var(--gap-half);
        }

        h5:not(.label) {
          color: var(--color-primary);
        }

        p {
          max-width: 28ch;
          margin-bottom: 30px;
        }

        figure {
          box-shadow: var(--offset-shadow);
          max-width: 350px;
          max-height: 550px;
        }

        figure img {
          max-width: 100%;
          height: 550px;
          object-fit: cover;
        }

        .content {
          display: grid;
          margin-left: var(--gap-double);
          grid-gap: var(--gap-half);
          grid-template-columns: 1fr 1fr;
          z-index: 10;
          margin-top: var(--gap-half);
        }

        .background {
          position: absolute;
          right: 0;
          top: 0;
          transform: translate(26%, -30%);
          pointer-events: none;
        }

        .mobile-only {
          display: none;
        }

        .desktop-only {
          display: block;
        }

        @media (max-width: 850px) {
          .mobile-only {
            display: block;
          }

          .desktop-only {
            display: none;
          }

          .content {
            display: grid;
            margin-left: 0;
            grid-gap: var(--gap-half);
            grid-template-columns: 1fr;
            z-index: 10;
            margin-top: var(--gap-half);
          }

          p {
            max-width: 90%;
            margin-bottom: 30px;
          }

          figure {
            box-shadow: var(--offset-shadow);
            max-width: auto;
            max-height: 400px;
            margin: var(--gap-double) auto;
          }

          figure img {
            width: 100%;
            height: 400px;
            object-fit: cover;
          }
        }
      `}</style>
    </section>
  )
}

export default Team
