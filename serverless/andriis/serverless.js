module.exports = functionsBuilder =>
  functionsBuilder
    .addWebFunction('POST', '/getUserPremiumInfo', async (ctx, req) => {
        const {userId} = req.query
      const result = await ctx.legacyRpcClient('PlansBoUserManager', 'com.wixpress.premium.premium-plans')
        .invoke('getUserPremiumInfo', userId);
      return result;
    })
    .addWebFunction('POST', '/getUserPremiumInfo', async (ctx, req) => {
        const {userId} = req.query
      const result = await ctx.legacyRpcClient('PlansBoApi', 'com.wixpress.premium.premium-plans')
        .invoke('getUserPlanPackages ', userId);
      return result;
    })
    .addWebFunction('GET', '/hello', async (ctx, req) => {
      return {hello: 'world'};
    });