export const TYPOGRAPHY_CALIBRATION_TITLES = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
  "Dolor sit amet consectetur, adipisicing elit, sed eiusmod tempor incidunt ut labore magna",
  "Consectetur adipiscing elit, integer posuere erat a ante venenatis dapibus posuere aliquet",
  "Sed ut perspiciatis unde omnis iste error sit voluptatem accusantium doloremque laudantium",
  "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, ac consequuntur",
  "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit ea laboriosam",
  "Quis vel eum iure reprehenderit qui in ea voluptate velit esse nihil molestiae consequatur",
  "At vero eos et accusamus et odio dignissimos ducimus qui blanditiis praesentium voluptatum",
  "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet",
  "Itaque rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias",
] as const;

export const TYPOGRAPHY_CALIBRATION_SUMMARIES = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam quis nostrud",
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis",
  "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt iam",
  "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur quis autem vel eum iure",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, excepteur sint occaecat cupidatat non proident sunt culpa",
  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
  "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae itaque",
  "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus omnis voluptas saepe assumenda est",
  "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
  "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores saepe repellat",
] as const;

function getCalibrationVariant(
  variants: readonly string[],
  index: number,
): string {
  return variants[index % variants.length];
}

export function getCalibrationTitle(index: number): string {
  return getCalibrationVariant(TYPOGRAPHY_CALIBRATION_TITLES, index);
}

export function getCalibrationSummary(index: number): string {
  return getCalibrationVariant(TYPOGRAPHY_CALIBRATION_SUMMARIES, index);
}
