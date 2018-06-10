interface IModel {
    revisions?: string[];
    name: string;
}
export declare const MODELS: {
    [index: string]: IModel;
};
export declare function serialNumber(): string | null;
export declare function isPi(): boolean;
export declare function piModel(): IModel;
export {};
