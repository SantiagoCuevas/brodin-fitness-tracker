import {
  Modal,
  Stack,
  Autocomplete,
  Center,
  Loader,
  Image,
  Title,
  Button,
} from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { FC, useRef, useState } from 'react';
import { useSnapshotsWithPics } from '../hooks/useSnapshotsWithPics';

interface ProgressPicModalProps {
  opened: boolean;
  close: () => void;
}

type ComparisonSlots = {
  left: string | null;
  right: string | null;
};

export const ProgressPicModal: FC<ProgressPicModalProps> = ({
  opened,
  close,
}) => {
  const { snapshots, isLoading } = useSnapshotsWithPics();
  const [comparison, setComparison] = useState<ComparisonSlots>({
    left: null,
    right: null,
  });
  const [showComparisonView, setShowComparisonView] = useState(false);
  const [search, setSearch] = useState('');
  const comparisonRef = useRef<HTMLDivElement>(null);

  const toggleComparison = (src: string) => {
    setShowComparisonView(false);

    setComparison((prev) => {
      const updated = (() => {
        if (prev.left === src) return { ...prev, left: null };
        if (prev.right === src) return { ...prev, right: null };
        if (!prev.left) return { ...prev, left: src };
        if (!prev.right) return { ...prev, right: src };
        return { ...prev, right: src };
      })();

      requestAnimationFrame(() => {
        if ((updated.left || updated.right) && comparisonRef.current) {
          comparisonRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      });

      return updated;
    });
  };

  const clearComparison = () => {
    setComparison({ left: null, right: null });
    setShowComparisonView(false);
  };

  const closeComparisonView = () => {
    setShowComparisonView(false);
  };

  const allDates =
    snapshots?.map((s) => formatDateToUSLong(s.created_at)) ?? [];

  const filteredSnapshots = search
    ? (snapshots?.filter((s) =>
        formatDateToUSLong(s.created_at)
          .toLowerCase()
          .includes(search.toLowerCase())
      ) ?? [])
    : (snapshots ?? []);

  return (
    <Modal
      opened={opened}
      onClose={() => {
        close();
        clearComparison();
        setSearch('');
      }}
      title="Progress Pictures"
      fullScreen
    >
      {isLoading ? (
        <Center h="100%">
          <Loader />
        </Center>
      ) : showComparisonView && comparison.left && comparison.right ? (
        <div className="h-full flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <Button variant="light" onClick={closeComparisonView}>
              Back
            </Button>
          </div>

          <Carousel
            withIndicators
            className="flex-1"
            styles={{ indicator: { backgroundColor: '#888' } }}
          >
            <Carousel.Slide className="flex items-center justify-center h-full">
              <Image
                src={comparison.left}
                fit="contain"
                className="max-h-full max-w-full"
              />
            </Carousel.Slide>
            <Carousel.Slide className="flex items-center justify-center h-full">
              <Image
                src={comparison.right}
                fit="contain"
                className="max-h-full max-w-full"
              />
            </Carousel.Slide>
          </Carousel>
        </div>
      ) : (
        <div
          style={{
            maxHeight: 'calc(100vh - 80px)',
            overflowY: 'auto',
          }}
        >
          <Stack gap="md">
            {(comparison.left || comparison.right) && (
              <div
                ref={comparisonRef}
                className="flex flex-col gap-2 mb-4 items-center"
              >
                <div className="flex justify-center items-center gap-4">
                  {comparison.left ? (
                    <Image
                      src={comparison.left}
                      alt="Comparison Left"
                      w={150}
                      radius="md"
                      fit="contain"
                    />
                  ) : (
                    <PlaceholderSlot />
                  )}
                  {comparison.right ? (
                    <Image
                      src={comparison.right}
                      alt="Comparison Right"
                      w={150}
                      radius="md"
                      fit="contain"
                    />
                  ) : (
                    <PlaceholderSlot />
                  )}
                </div>

                <div className="flex gap-3">
                  <Button
                    onClick={() => setShowComparisonView(true)}
                    disabled={!comparison.left || !comparison.right}
                  >
                    Compare Now
                  </Button>
                  <Button
                    variant="light"
                    color="gray"
                    onClick={clearComparison}
                  >
                    Clear
                  </Button>
                </div>
              </div>
            )}

            <Autocomplete
              label="Search by date"
              data={allDates}
              value={search}
              onChange={setSearch}
              placeholder="e.g. May 2025"
            />
            {filteredSnapshots.length ? (
              filteredSnapshots.map((s) =>
                s.image_url.map((src, i) => (
                  <ProgressPicItem
                    key={`${s.id}-${i}`}
                    src={src}
                    date={formatDateToUSLong(s.created_at)}
                    selected={
                      src === comparison.left || src === comparison.right
                    }
                    onCompare={() => toggleComparison(src)}
                  />
                ))
              )
            ) : (
              <Center>No matching progress pictures.</Center>
            )}
          </Stack>
        </div>
      )}
    </Modal>
  );
};

interface ProgressPicItemProps {
  src: string;
  date: string;
  selected: boolean;
  onCompare: () => void;
}

const ProgressPicItem: FC<ProgressPicItemProps> = ({
  src,
  date,
  selected,
  onCompare,
}) => (
  <div
    className="relative flex flex-col gap-2 max-w-[300px] mx-auto group cursor-pointer"
    onClick={onCompare}
  >
    <Image src={src} alt="Progress" radius="md" fit="contain" />
    <Title order={4} ta="center" fw={500}>
      {date}
    </Title>

    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded-md">
      <button className="bg-white text-black px-4 py-2 rounded font-semibold shadow">
        {selected ? 'Selected' : 'Compare'}
      </button>
    </div>
  </div>
);

const PlaceholderSlot = () => (
  <div className="w-[150px] h-[200px] bg-gray-200 rounded-md flex items-center justify-center">
    <span className="text-gray-500">Select</span>
  </div>
);

export function formatDateToUSLong(dateString: string): string {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    throw new Error('Invalid date string');
  }

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
