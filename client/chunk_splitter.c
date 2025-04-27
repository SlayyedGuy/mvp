#include <stdio.h>
#include <stdlib.h>

#define CHUNK_SIZE (5 * 1024 * 1024) // 5 MB chunks

int main(int argc, char *argv[])
{
    if (argc != 2)
    {
        printf("Usage: %s <filename>\n", argv[0]);
        return 1;
    }

    FILE *fp = fopen(argv[1], "rb");
    if (!fp)
    {
        perror("File opening failed");
        return 2;
    }

    unsigned char *buffer = malloc(CHUNK_SIZE);
    if (!buffer)
    {
        printf("Memory error!\n");
        fclose(fp);
        return 3;
    }

    int part = 0;
    size_t bytesRead;
    while ((bytesRead = fread(buffer, 1, CHUNK_SIZE, fp)) > 0)
    {
        char partName[256];
        sprintf(partName, "%s.part%d", argv[1], part);

        FILE *chunk = fopen(partName, "wb");
        fwrite(buffer, 1, bytesRead, chunk);
        fclose(chunk);

        printf("Created %s (%zu bytes)\n", partName, bytesRead);
        part++;
    }

    free(buffer);
    fclose(fp);
    printf("Splitting complete.\n");
    return 0;
}
