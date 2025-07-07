import type { Meta, StoryObj } from "@storybook/react-vite";
import AvatarGroup from "./avatar-group";

const meta: Meta<typeof AvatarGroup> = {
  title: "UI/AvatarGroup",
  component: AvatarGroup,
};

export default meta;

type Story = StoryObj<typeof AvatarGroup>;

export const Default: Story = {
  args: {
    avatars: [
      {
        altText: "Hong Kil Dong",
        profileUrl:
          "https://cdn.pixabay.com/photo/2021/10/29/13/30/love-6751932_1280.jpg",
      },
      {
        altText: "Kim Kil Dong",
        profileUrl:
          "https://cdn.pixabay.com/photo/2025/04/16/03/58/tulips-9536635_1280.jpg",
      },
      {
        altText: "Park Kil Dong",
      },
      {
        altText: "Hong Kil Dong",
        profileUrl:
          "https://cdn.pixabay.com/photo/2021/10/29/13/30/love-6751932_1280.jpg",
      },
      {
        altText: "Kim Kil Dong",
        profileUrl:
          "https://cdn.pixabay.com/photo/2025/04/16/03/58/tulips-9536635_1280.jpg",
      },
      {
        altText: "Park Kil Dong",
      },
      {
        altText: "Hong Kil Dong",
        profileUrl:
          "https://cdn.pixabay.com/photo/2021/10/29/13/30/love-6751932_1280.jpg",
      },
      {
        altText: "Kim Kil Dong",
        profileUrl:
          "https://cdn.pixabay.com/photo/2025/04/16/03/58/tulips-9536635_1280.jpg",
      },
      {
        altText: "Park Kil Dong",
      },
      {
        altText: "Hong Kil Dong",
        profileUrl:
          "https://cdn.pixabay.com/photo/2021/10/29/13/30/love-6751932_1280.jpg",
      },
      {
        altText: "Kim Kil Dong",
        profileUrl:
          "https://cdn.pixabay.com/photo/2025/04/16/03/58/tulips-9536635_1280.jpg",
      },
      {
        altText: "Park Kil Dong",
      },
      {
        altText: "Hong Kil Dong",
        profileUrl:
          "https://cdn.pixabay.com/photo/2021/10/29/13/30/love-6751932_1280.jpg",
      },
      {
        altText: "Kim Kil Dong",
        profileUrl:
          "https://cdn.pixabay.com/photo/2025/04/16/03/58/tulips-9536635_1280.jpg",
      },
      {
        altText: "Park Kil Dong",
      },
      {
        altText: "Hong Kil Dong",
        profileUrl:
          "https://cdn.pixabay.com/photo/2021/10/29/13/30/love-6751932_1280.jpg",
      },
      {
        altText: "Kim Kil Dong",
        profileUrl:
          "https://cdn.pixabay.com/photo/2025/04/16/03/58/tulips-9536635_1280.jpg",
      },
      {
        altText: "Park Kil Dong",
      },
      {
        altText: "Hong Kil Dong",
        profileUrl:
          "https://cdn.pixabay.com/photo/2021/10/29/13/30/love-6751932_1280.jpg",
      },
    ],
    max: 5,
    overlap: true,
    size: "md",
    shape: "circle",
  },
};
