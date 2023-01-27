import React from "react";
import clsx from "clsx";
import LayoutHead from "@theme/LayoutHead";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./download.module.css";

function DownloadPage() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.downloadContainer}>

          <div className={styles.downloadButtonContainer}>
            <h3>Download</h3>
            <p>
              Farcaster is available for macOS, iOS and Android; web, Windows and Linux coming in 2023.
            </p>
          </div>

          <div className={styles.downloadButtonContainer}>
            <h5>Desktop</h5>
            <Link
              className={styles.downloadButton}
              to="https://downloads.farcaster.xyz/Farcaster-latest.dmg"
            >
              macOS - Intel
            </Link>
            <Link
              className={styles.downloadButton}
              to="https://downloads.farcaster.xyz/Farcaster-latest-arm64.dmg"
            >
              macOS - Apple silicon
            </Link>
            <div className={styles.downloadHelpLink}>
              Not sure if your Mac is Intel or Apple silicon?{" "}
              <a href="https://support.apple.com/en-us/HT211814">Learn more</a>
            </div>
          </div>

          <div className={styles.downloadButtonContainer}>
            <h5>Mobile</h5>
            <Link
              className={styles.downloadButton}
              to="https://apps.apple.com/us/app/farcaster/id1600555445"
            >
              iOS
            </Link>
            <Link
              className={styles.downloadButton}
              to="https://play.google.com/store/apps/details?id=com.farcaster.mobile"
            >
              Android
            </Link>
          </div>
        </div>
      </div>
    </div>

  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div>
      <LayoutHead
        title="Download"
        description="Farcaster, a decentralized social network"
      />
      <DownloadPage />
    </div>
  );
}
