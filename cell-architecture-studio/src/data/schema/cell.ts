export type ModelKind =
  | "plant"
  | "whiteBlood"
  | "neuron"
  | "epithelial"
  | "bacteria"
  | "ecoli"
  | "animal"
  | "muscle";

export type ViewMode = "mesh" | "focus";

export type OrganelleItem = {
  id: string;
  name: string;
  subtitle: string;
  color: string;
  attributes: Array<{
    label: string;
    value: string;
  }>;
  note: string;
  fact: string;
};

export type CellModelAsset = {
  url: string;
  previewUrl: string;
  sourceLabel: string;
  sourceUrl: string;
  scale: number;
  rotation?: [number, number, number];
  position?: [number, number, number];
  exposure?: number;
  materialMode?: "studio" | "native";
};

export type CellRenderImage = {
  url: string;
  aspect: "square" | "wide" | "landscape";
};

export type CellItem = {
  id: string;
  name: string;
  type: string;
  accent: string;
  accentSoft: string;
  color: string;
  modelKind: ModelKind;
  defaultOrganelle: string;
  comparison: string;
  modelAsset?: CellModelAsset;
  renderImage?: CellRenderImage;
  occurrence: {
    title: string;
    body: string;
    motif: string;
  };
  microscope: Array<{
    label: string;
    tone: string;
    pattern: string;
  }>;
  organelles: OrganelleItem[];
};
