import { RequestHandler } from 'express';

export type ExpressHandler<Req, Res> = RequestHandler<
  any,
  Partial<Res>,
  Partial<Req>,
  any
>;