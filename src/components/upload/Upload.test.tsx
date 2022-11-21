/**
 * @vitest-environment jsdom
 */

import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Upload from "./Upload";

describe("Upload", () => {
  render(<Upload />);

  it("Upload button schould not be visible on first render", () => {
    expect(screen.queryByRole("uploadButton")).toBeNull();
  });

  it("choose image label schould be visible on first render", () => {
    expect(screen.queryByRole("chooseImage")).not.toBeNull();
  });

  it("no file should be selected on first render", () => {
    const fileInput = screen.queryByRole("fileInput") as HTMLInputElement;
    expect(fileInput!.files![0]).toBeUndefined();
  });

  it("user can upload file", async () => {
    const fileInput = screen.queryByRole("fileInput") as HTMLInputElement;
    const fakeFile = new File(["(⌐□_□)"], "fakeImage.png", {
      type: "image/png",
    });
    await userEvent.upload(fileInput, fakeFile);

    expect(fileInput!.files).toHaveLength(1);
    expect(fileInput!.files![0]).toStrictEqual(fakeFile);
  });

  it("user uploading file should make upload button available and hide choose file label", async () => {
    const fileInput = screen.queryByRole("fileInput") as HTMLInputElement;
    const fakeFile = new File(["(⌐□_□)"], "fakeImage.png", {
      type: "image/png",
    });
    await userEvent.upload(fileInput, fakeFile);

    expect(screen.queryByRole("uploadButton")).not.toBeNull();
    expect(screen.queryByRole("chooseImage")).toBeNull();
  });
});
