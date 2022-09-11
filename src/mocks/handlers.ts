import { PathParams, rest } from 'msw';

import { SubmitMinifigReqBody, SubmitMinifigResponse } from '@/api/actions/minifigs/minifigs.types';

export const handlers = [
  rest.post<SubmitMinifigReqBody, PathParams, SubmitMinifigResponse>('/submit-minifig', async (req, res, ctx) => {
    const body: SubmitMinifigReqBody = await req.json();

    const { name, surname } = body.shipment;
    const fullName = `${name} ${surname}`;
    const { name: minifigName } = body.minifig;

    if (body.shipment.zipcode === '42021') {
      return res(ctx.status(400), ctx.json({ message: 'Hello sir! Wrong request sir!' }));
    }

    return res(
      ctx.status(200),
      ctx.json({
        message: `Congratulations ${fullName}! You have successfully submitted your Minifig order, you will receive your ${minifigName} soon!`,
      }),
    );
  }),
];
