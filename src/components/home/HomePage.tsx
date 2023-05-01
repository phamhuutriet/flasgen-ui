import React, { useState } from "react";
import { FlashCardData } from "../data/FlashCardData";
import { EditCard } from "./EditCard.tsx";
import { GeneratedCards } from "./GeneratedCards.tsx";
import { TextInput } from "./TextInput.tsx";

export enum HomeRenderType {
  TEXT_INPUT,
  GENERATED_CARDS,
  EDIT_CARD,
}

export const HomePage = () => {
  const [currentRenderType, setCurrentRenderType] = useState<HomeRenderType>(HomeRenderType.TEXT_INPUT);
  const [flashcards, setFlashcards] = useState<FlashCardData>();

  switch (currentRenderType) {
    case HomeRenderType.TEXT_INPUT:
      return <TextInput onChangePage={(pageType: HomeRenderType) => setCurrentRenderType(pageType)} onChangeFlashcards={setFlashcards} />;
    case HomeRenderType.GENERATED_CARDS:
      return <GeneratedCards onChangePage={(pageType: HomeRenderType) => setCurrentRenderType(pageType)} flashcards={flashcards} />;
    case HomeRenderType.EDIT_CARD:
      return <EditCard onChangePage={(pageType: HomeRenderType) => setCurrentRenderType(pageType)} />;
    default:
      return <TextInput onChangePage={(pageType: HomeRenderType) => setCurrentRenderType(pageType)} onChangeFlashcards={setFlashcards} />;
  }
};
