{
  description = "Development shell for the IEEE Computer Society at UCF website";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    {
      self,
      nixpkgs,
      flake-utils,
      ...
    }@inputs:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        # Import nixpkgs for the current system
        pkgs = import nixpkgs { inherit system; };

        # Define the Node.js version we want
        node = pkgs.nodejs_22;
      in
      {
        # The main output: a development shell
        devShells.default = pkgs.mkShell {
          # List of packages to make available in the shell
          packages = with pkgs; [
            # Core dependencies for Astro and Sanity
            node
            git
          ];

          # A script to run every time 'nix develop' is used
          shellHook = ''
            echo ""
            echo "------------------------------------------------------"
            echo "   Welcome to the IEEE CS @ UCF Website dev shell!    "
            echo "------------------------------------------------------"
            echo ""
            echo "  Available tools:"
            echo "    - Node.js $(node --version)"
            echo "    - npm $(npm --version)"
            echo "    - Zed Editor"
            echo ""

            # Check if root node_modules exists and give a helpful hint
            if [ ! -d "node_modules" ]; then
              echo "-> Root 'node_modules' not found."
              echo "   Run 'npm install' to install Astro dependencies."
            fi

            # Check if Sanity node_modules exists and give a hint
            if [ -d "sanity" ] && [ ! -d "sanity/node_modules" ]; then
              echo "-> Sanity 'node_modules' not found."
              echo "   Run 'cd sanity && npm install' to install CMS dependencies."
            fi

            echo ""
          '';
        };
      }
    );
}
