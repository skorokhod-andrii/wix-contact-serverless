module.exports = functionsBuilder =>
  functionsBuilder
    .addWebFunction('POST', '/getUserPremiumInfo', async (ctx, req) => {
      const { userId } = req.query;
      const result = await ctx.legacyRpcClient('PlansBoUserManager', 'com.wixpress.premium.premium-plans')
        .invoke('getUserPremiumInfo', userId);
      return result;
    })
    .addWebFunction('POST', '/getUserPlanPackages', async (ctx, req) => {
      try {
        const { userId } = req.query;
        const result = await ctx.legacyRpcClient('PlansBoApi', 'com.wixpress.premium.premium-plans')
          .invoke('getAllUserPlanPackages', userId);
        return result;
      } catch (e){
        return e;
      }

    })
    .addWebFunction('GET', '/hello', async (ctx, req) => {
      return {tx, req};
    });