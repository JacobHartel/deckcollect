"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "@/components/button";

export function WalletConnect() {
  return (
    <ConnectButton.Custom>
      {({ account, chain, openConnectModal, openAccountModal, mounted }) => {
        const connected = mounted && account && chain;
        return (
          <>
            {!connected ? (
              <Button onClick={openConnectModal} variant="default">
                Connect Wallet
              </Button>
            ) : (
              <Button onClick={openAccountModal} variant="outline">
                {account.displayName}
              </Button>
            )}
          </>
        );
      }}
    </ConnectButton.Custom>
  );
}
