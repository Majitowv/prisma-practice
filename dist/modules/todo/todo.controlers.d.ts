import { Request, Response } from "express";
declare const _default: {
    getAllData: (req: Request, res: Response) => Promise<void>;
    AddData: (req: Request, res: Response) => Promise<void>;
    deleteData: (req: Request, res: Response) => Promise<void>;
    getOneData: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    patchData: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
export default _default;
//# sourceMappingURL=todo.controlers.d.ts.map