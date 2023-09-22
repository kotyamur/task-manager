export const categoryItemStyles = {
  textWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "50%",
    "@media (max-width:767px)": {
      width: "100%",
    },
  },
  buttonsWrapper: {
    display: "flex",
    alignItems: "center",
    gap: 3,
    justifyContent: "space-between",
  },
  paper: {
    height: 60,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    gap: 4,
    "@media (max-width:767px)": {
      flexDirection: "column",
      height: 80,
      padding: "16px",
      gap: 1,
    },
  },
};