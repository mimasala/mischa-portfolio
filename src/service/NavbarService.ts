const NavbarService = () => ({
  handleToTopClick: (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  },
  closeNav: () => {
    
  }
  
});

export default NavbarService;
