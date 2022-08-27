import React from "react";
import PropTypes from "prop-types";
import useTitle from "react-use/lib/useTitle";
import { Container } from "reactstrap";
import Config from "./Config";

export default function Secrets({ additionalConfigData, filterFunction }) {
  useTitle("IntelOwl | Config", {
    restoreOnUnmount: true,
  });

  return (
    <Container>
      <Config
        configFilter={(resp) =>
          resp.filter(
            (item) => filterFunction(item) && item.config_type === "2"
          )
        }
        additionalConfigData={{
          ...additionalConfigData,
          config_type: "2",
        }}
        dataName="secrets"
      />
    </Container>
  );
}

Secrets.propTypes = {
  additionalConfigData: PropTypes.object,
  filterFunction: PropTypes.func,
};

Secrets.defaultProps = {
  additionalConfigData: {},
  filterFunction: () => true,
};
