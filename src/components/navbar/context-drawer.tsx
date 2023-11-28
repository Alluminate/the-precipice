import React, { ReactNode, createContext, useContext, useState } from "react";

interface DrawerContextProps {
  isDrawerOpen: boolean;
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DrawerContext = createContext<DrawerContextProps | undefined>(
  undefined
);

export const useDrawerContext = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error("useDrawerContext must be used within a DrawerProvider");
  }
  return context;
};

export const DrawerProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <DrawerContext.Provider value={{ isDrawerOpen, setIsDrawerOpen }}>
      {children}
    </DrawerContext.Provider>
  );
};

// import React, { createContext, useContext, useState } from "react";

// interface DrawerContextProps {
//   isDrawerOpen: boolean;
//   setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
// }

// export const DrawerContext = createContext<DrawerContextProps | undefined>(
//   undefined
// );

// export const useDrawerContext = () => {
//   const context = useContext(DrawerContext);
//   if (!context) {
//     throw new Error("useDrawerContext must be used within a DrawerProvider");
//   }
//   return context;
// };

// export const DrawerProvider: React.FC = ({ children }) => {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   return (
//     <DrawerContext.Provider value={{ isDrawerOpen, setIsDrawerOpen }}>
//       {children}
//     </DrawerContext.Provider>
//   );
// };
