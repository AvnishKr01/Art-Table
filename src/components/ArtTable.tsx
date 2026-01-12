import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { fetchArtworks } from "../services/api";
import type { Artwork } from "../types/Artwork";

const ROWS_PER_PAGE = 12;

export default function ArtTable() {
    const [artworks, setArtworks] = useState<Artwork[]>([]);
    const [totalRecords, setTotalRecords] = useState(0);
    const [loading, setLoading] = useState(false);

    const [page, setPage] = useState(0);
    const [selectedRows, setSelectedRows] = useState<Artwork[]>([]);

    useEffect(() => {
        loadData(page + 1);
    }, [page]);

    const loadData = async (pageNumber: number) => {
        setLoading(true);
        const result = await fetchArtworks(pageNumber, ROWS_PER_PAGE);
        setArtworks(result.data);
        setTotalRecords(result.total);
        setLoading(false);
    };

    const onPageChange = (event: any) => {
        setPage(event.page);
    };

    return (
        <DataTable
            value={artworks}
            paginator
            rows={ROWS_PER_PAGE}
            totalRecords={totalRecords}
            lazy
            loading={loading}
            first={page * ROWS_PER_PAGE}
            onPage={onPageChange}
            selection={selectedRows}
            onSelectionChange={(e) => setSelectedRows(e.value)}
            selectionMode="checkbox"
            dataKey="id"
        >
            <Column selectionMode="multiple" headerStyle={{ width: "3rem" }} />
            <Column field="title" header="Title" />
            <Column field="artist_display" header="Artist" />
            <Column field="place_of_origin" header="Origin" />
            <Column field="date_display" header="Date" />
        </DataTable>
    );
}
