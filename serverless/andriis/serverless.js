module.exports = functionsBuilder =>
  functionsBuilder
    .addWebFunction('POST', '/getUserPremiumInfo', async (ctx, req) => {
      try {
        const userId = req.body.userId;

        const result = await ctx.legacyRpcClient('PlansBoUserManager', 'com.wixpress.premium.premium-plans')
          .invoke('getUserPremiumInfo', userId);
        return result;
      } catch (e) {
        return e;
      }

    })
    .addWebFunction('POST', '/getUserPremiumInfo', async (ctx, req) => {
      const { userId } = req.body;
      const result = await ctx.legacyRpcClient('PlansBoApi', 'com.wixpress.premium.premium-plans')
        .invoke('getUserPlanPackages ', userId);
      return result;
    })
    .addWebFunction('GET', '/hello', async (ctx, req) => {
      return req;
    });